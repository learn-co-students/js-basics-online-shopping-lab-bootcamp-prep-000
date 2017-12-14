var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var cartList = [];
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      var prices = cart[i][item];
      cartList.push(`${item} at $${prices}`);
    }
    var message = 'In your cart, you have ';
    for (var i = 0; i < cartList.length; i++) {
      message += cartList[i];
    }
} console.log(message +'.');
}

function total() {
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart.hasOwnProperty(item)) {
            return cart.splice(i,1)
        } else  return cart
        console.log("That item is not in your cart");
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
