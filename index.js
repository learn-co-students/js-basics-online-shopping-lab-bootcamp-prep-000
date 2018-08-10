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
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = { itemName: item, itemPrice: price}
  cart.push(item_object)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else {
  var contents = ["In your cart, you have "]
  for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        contents.push(item + " at $" + cart[i][item])
      }
  }
  }
  return contents
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
