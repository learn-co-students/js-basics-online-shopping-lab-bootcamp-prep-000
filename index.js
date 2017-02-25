var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() *100)
  cart.push ({[item]:price});
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart(){
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var itemsArray = [];
    for (var i = 0; cart.length > i ; i++) {
      var item = Object.keys(cart[i]);
      var itemPrice = cart[i][item];

      itemsArray.push(`${item} at $${itemPrice}`);
    }

    console.log(`In your cart, you have ${itemsArray.join(', ')}.`);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      // [], how do we remove an element at an index? splice
      cart.splice(i, 1);
      return cart; // what does return do for us?
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  return cart.splice(0, cart.length)
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
