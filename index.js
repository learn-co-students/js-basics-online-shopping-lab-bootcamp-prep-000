var cart=[];

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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemPrice = [];
    for (var i = 0, l = cart.length; i < l; i++) {
      var itemAndPrice = cart[i]
      var item = Object.keys(cart[i])[0]
      var price = itemAndPrice[item];
      itemPrice.push(` ${item} at $${price}`);
    }
    console.log(`In your cart, you have${itemPrice}.`)
  }
}

function removeFromCart(removeItem) {
  for (var i = 0, l = cart.length; i < l; i++) {
    var cartItems = Object.keys(cart[i])[0];
    if(cartItems == removeItem){
      cart.pop(cartItems)
      return cart;
    } else {
      console.log("That item is not in your cart.");
    }
  }
}

function placeOrder(cardNumber){
  if(typeof(cardNumber) !== 'number'){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = 0, l = cart.length; i < l; i++) {
    cart.pop(i);
    }
  }
}
