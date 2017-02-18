var cart =[];

function setCart(arr) {
  return cart = arr;
}

function total() {
  let total = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}

function getCart() {
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var currentCart = getCart();
  var cartSize = currentCart.length;
  var itemPriceMsgs =[];
  if (cartSize <=0){
    console.log("Your shopping cart is empty.");
  } else {
    for (var i=0; i<cartSize; i++){
        var item = currentCart[i];
        for (var key in item) {
          var message = `${key} at $${item[key]}`;
          itemPriceMsgs.push(message);
        }
    }
    var priceMsg = itemPriceMsgs.join(", ");
    console.log(`In your cart, you have ${priceMsg}.`);
  }
}

[1,2,3,4]

function removeFromCart (removeItem){
  var currentCart = getCart();
  var cartSize = currentCart.length;
  // Iterate over the cart
  for (var i=0; i<cartSize; i++){
      var curItem = currentCart[i]; // current item {}
      // does it match what we've been asked to remove?
      if (curItem.hasOwnProperty(removeItem)){
        return currentCart.splice(i,1);
      }
  }
  console.log("That item is not in your cart.");
}


function placeOrder(num){
  if (!num){
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${num}.`);
    return cart =[]; 
  }
}