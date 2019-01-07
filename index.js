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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() *101)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var newCart = [];
  if (cart.length > 0) {
    for (var index in cart)  {
      var itemObject = cart[index];
      var itemKey = Object.keys(itemObject)
      var itemPrice = itemObject[itemKey]
      newCart.push(`${itemKey} at $${itemPrice}`);
  }
}

else {
  console.log("Your shopping cart is empty.");
}
var newCart = newCart.join(', ')
  console.log(`In your cart, you have ${newCart}.`);
}

function removeFromCart(name)  {
  for (var name in cart) {
    if (cart.hasOwnProperty(name)) {
      cart.shift();
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
   if (cardNumber === undefined) {
     console.log("We don't have a credit card on file for you to place your order.");
   }
   else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   }
   cart = [];
 }
