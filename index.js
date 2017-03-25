var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var itemObj = {};
  itemObj[item] = price;
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart === 'undefined' || cart.length == 0){
    console.log("Your shopping cart is empty.");
  } else {
    var inCart = "In your cart, you have ";
    for(var item in cart){
      var obj = cart[item];
      for(var i in obj){
        inCart += `${i} at $${obj[i]}`+`${item < (cart.length-1) ? ', ' : '.'}`;
      }
    }
    console.log(inCart);
  }
}

function removeFromCart(item){
  for(var i=0; i < cart.length; i++){
    console.log(cart[i]);
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(card){
  if(card === 'undefined' || card == null){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart.length=0;
  }
}
