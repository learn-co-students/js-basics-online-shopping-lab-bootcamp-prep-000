var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice = Math.floor(Math.random() * 100 + 1);
var itemObj = {[item]: itemPrice};
cart.push(itemObj);
console.log(`${item} has been added to your cart.`)
}

function viewCart() {
if (cart === 0){
  console.log("Your shopping cart is empty.")
} else {
  var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
}
}

function total() {
  var cartItemPrice = [];
  var totalPrice = 0;
  
  for (var i = 0; i<cart.length; i++){
    var itemPrice = cart[i][Object.keys([cart[i]])];
    cartItemPrice.push(itemPrice);
  }
  for (var a = 0; a<cart.length; a++){
    totalPrice = cartItemPrice[a] += totalPrice
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
    cart.splice([i],1)
    return cart
  }
}
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
    for (var i=cart.length; i>=0; i--){
      cart.pop();
    }
  }
  console.log("Sorry, we don't have a credit card on file for you.")
  return cart;
}
