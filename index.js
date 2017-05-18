var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart (){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var myStartingString = "In your cart, you have" ;
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0]; //seems to be returning the indexes, not strings??
      var price = cart[i][item];
      myStartingString = `${myStartingString} ${item} at $${price}${i < cart.length -1 ? "," : "."}`;
    }
  console.log(myStartingString);
  }
}

function removeFromCart(item){ //Check out hasOwnProperty
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) { //if the item is not in the cart array, then alert
    console.log (cart.splice(item));
    return cart;
    } 
  }
  console.log ('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log ("We don't have a credit card on file for you to place your order.");
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  return cart = [];
}
