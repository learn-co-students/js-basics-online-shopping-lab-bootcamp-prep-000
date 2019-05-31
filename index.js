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
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemObj = {item: itemName};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
 // write your code here
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1){
    var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    console.log(oneItem)
  } else if (cart.length === 2){
    var twoItems = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
    console.log(twoItems)
  } else {
    var cartData = []
    for (var i = 0; i < cart.length-1; i++){
      cartData.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
}
    var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`
  }
  console.log(threePlusItems)
}
viewCart()
function total() {
 // write your code here
  var cartItemPrice = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i][Object.keys(cart[i])]
      cartItemPrice.push(itemPrice)
    }
  
  for (var a = 0; a < cartItemPrice.length; a++) {
    totalPrice = cartItemPrice[a]+=totalPrice
  }
  return totalPrice
}
total()
function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice([i], 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}
function placeOrder(cardNumber) {
 // write your code here
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
  }
  }
  console.log("Sorry, we don't have a credit card on file for you.")
  return cart;
}