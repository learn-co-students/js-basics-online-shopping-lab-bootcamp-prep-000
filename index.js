var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemName = item
  const itemPrice = Math.floor(Math.random() * 100 + 1)
  var item = { [itemName]: itemPrice}
  cart.push(item)
  console.log(itemName + " has been added to your cart.")
  return cart
}

function viewCart() {
  var inCart = "In your cart, you have "
  var sentence = []
  if (cart.length === 0) {
  return console.log("Your shopping cart is empty.")
} else {

  Object.keys(cart).forEach(function(key) {
          return console.log(key, cart[key]);
    });

  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
  // write your code here
}
