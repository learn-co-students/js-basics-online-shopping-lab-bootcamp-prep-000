var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

var getCart = () => {return cart};

function addToCart(item) {
  var price = Math.round(Math.random() * 100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart;
} //need to put item in [] in order for the var value to be added to object

function viewCart() {
  if (!cart || cart.length == 0) {
    console.log(`Your shopping cart is empty.`);
  }
  else {
    var b = "In your cart, you have ";
    for (var x = 0; x < cart.length; x++) {
      var a = Object.keys(cart[x]);
      b += `${a} at $${cart[x][a]}${x == cart.length -1 ? '.' : ', '}`
    }
    console.log(b);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function placeOrder(cc) {
  if (arguments === undefined || !cc) {
    console.log(`We don\'t have a credit card on file for you to place your order.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    return cart = [];
  }
}
