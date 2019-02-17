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
 var price = Math.floor(Math.random()*100) + 1
 let itemObject = {[itemName]: item, [itemPrice]: price}
 cart.push(`{itemName: "${itemObject.itemName}", itemPrice: ${itemObject.itemPrice} }`)
 console.log(cart)
 return `${itemObject.itemName} has been added to your cart.` 
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length ===1) {
    return `In your cart, you have ${cart[0]} at $${cart[0]}`
  }
  else if (cart.length ===2) {
    return `In your cart, you have ${cart[0]} at $${cart[0]}, and ${cart[1]} at $${cart[1]}`
  }
   else {
    return `In your cart, you have ${cart[0]} at $${cart[0]}, ${cart[1]} at $${cart[1]}, and ${cart[2]} at $${cart[2]}`
  }
}

function total() {
  // write your code here
  var counter = 0;
for (var i = 0; i < cart.length; i++) {
  counter = cart[i].itemPrice + counter
}  
return counter
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
