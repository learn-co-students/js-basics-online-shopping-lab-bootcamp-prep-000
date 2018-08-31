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

function viewCart() {
  let text = 'In your cart, you have '
  let lastObject = cart.slice(-1)
  let lastPartOfSent = `, and ${Object.keys(lastObject)[0]} at ${Object.values(lastObject)}.`
  if (cart.length < 1) {
  return 'Your shopping cart is empty.'  
  } else if (cart.length === 1) {
    return `${text} + ${Object.keys(cart)[0]} + at ${Object.values(cart)[0]}.`
  } else {
    for (let i = 0; i > cart.length; i++) {}
    return `${text}` 
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
