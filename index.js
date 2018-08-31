var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newObject = {itemName: item, itemPrice: getRandomInt(1, 101)}
  cart.push(newObject)
  return `${item} has been added to your cart.`
}

function addToCart(item) {
  let newObject = {itemName: item, itemPrice: getRandomInt(1, 101)}
  cart.push(newObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let text = 'In your cart, you have '
  if (cart.length < 1) {
     text = 'Your shopping cart is empty.'
  } else {
  for (let i = 0; i < cart.length; i++) {
    if (i == cart.length - 1) {
     text += `and ${cart[i].itemName} at $${cart[i].itemPrice}`
     } else {
        text += `${cart[i].itemName} at $${cart[i].itemPrice}`
        }
    }
  }
     return text
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
