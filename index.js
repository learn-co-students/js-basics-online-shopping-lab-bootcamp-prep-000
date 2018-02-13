var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({[item]: Math.floor(Math.random()*100+1)});
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
var bigCart = [];
if(cart.length === 0){
  console.log(`Your shopping cart is empty.`)
  return `Your shopping cart is empty.`;
}
else if(cart.length === 1){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
}
else if(cart.length === 2){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
}
else {
  for(var i = 0; i < cart.length - 1; i++) {
    bigCart.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
  console.log(`In your cart, you have${bigCart}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
}
}



function total() {
  var price = [];
  var totalPrice = 0;

  for (var i = 0; i < cart.length; i++){
  var itemPrice = [Object.values(cart[i])]
    price.push(parseInt(itemPrice))
}
  for (var h = 0; h < price.length; h++) {
    totalPrice = price[h] += totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
}
}
console.log(`That item is not in your cart.`)
return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
    return `Sorry, we don\'t have a credit card on file for you.`
}
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  return cart = [];
}
