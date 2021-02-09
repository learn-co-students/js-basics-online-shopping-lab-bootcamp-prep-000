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
 var price = Math.random() * 100;
 cart.push({"itemName": item, "itemPrice": price});
 return [`${item} has been added to your cart.`];
}

function viewCart() {
  // write your code here
  var i;
  var cartLength = Object.keys(cart).length;
  var cartContents = "In your cart, you have ";
  for (i=0; cartLength > i; i++) {
    cartContents = [`${cartContents} ${item} at ${price},`];
    if (cartLenght > i) {
      cartContents = [`${cartContents} and `];
    } else { cartContents =[`${cartContents}. `]; 
      }
  }
  if (cartLenght > 0) {
    return cartContents
  } else {
    return "Your shopping cart is empty."
  }
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
