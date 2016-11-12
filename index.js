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

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random(0, 100)*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var msg = cart.length > 0 ? "In your cart, you have " : "Your shopping cart is empty.";

  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    msg += (`${item} at $${cart[i][item]}`)
    msg = i === cart.length - 1 ? msg + "." : msg + ", "
    }


  console.log(msg)
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty([item])) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(number) {
  if (number === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.");
    return;
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart = [];
  }

}
