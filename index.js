var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

cart.push (Object.assign({}, {itemName:item, itemPrice:Math.floor(Math.random()*100)}))
 
 return `${item} has been added to your cart.`
}

function viewCart() {
 if (cart.length === 0) {
   return "Your shopping cart is empty."
 } else if (cart.length === 1) {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.` 
 } else if (cart.length === 2) {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
 } else if (cart.length >= 3) {
   var intro = `In your cart,`
   var preBody = ` you have ${cart[0].itemName} at $${cart[0].itemPrice},`
   var body = ``
   var end = ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
   for (var i = 1; i <= (cart.length - 2); i++) {
    body = body + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
   }
   return intro + preBody + body + end
  }
}

function total() {
  var total = 0
  for (var i = 0; i <= cart.length - 1; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1) 
  } else {
    return "That item is not in your cart."
    }
  } return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
