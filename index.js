var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function addToCart(itemName) {
 // write your code here
 var item = {
   itemName: itemName, 
   itemPrice: getRandomInt(100),
 } 
 cart.push(item)
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var line = "In your cart, you have "
  for (let i = 0; i < cart.length -1; i++) {
    let item = cart[i];
    line += `${item.itemName} at $${item.itemPrice}, `
  }
   if (cart.length > 1) line+= 'and ';
   let lastItem = cart[cart.length-1] 
  line += `${lastItem.itemName} at $${lastItem.itemPrice}.`
  return line;
}

function total() {
  // write your code here
  let value = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    value += item.itemPrice
  }
  return value
}

function removeFromCart(itemName) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === itemName) {
  cart.splice(i ,1) 
  return cart;
    }
  }
      return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return "Sorry, we don\'t have a credit card on file for you."
  }
  var line = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart.splice(0)
  return line
}
