var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100 )
  cart.push({itemName: item, itemPrice: price})
return `${item} has been added to your cart.`
}

function viewCart() {
 if (!cart.length) {
      return `Your shopping cart is empty.`
}
else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
else {
var yourCartList = 'In your cart, '
  for (var i = 0; i < cart.length -1; i++) {
    yourCartList += `you have ${cart[i].itemName} at $${cart[i].itemPrice},` 
    yourCartList += ` and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`
  }    
  
  return yourCartList;
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
