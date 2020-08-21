var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let i=0;
 var obj = {itemName: `${item}`, itemPrice: Math.floor((Math.random() * 100) + 1)}
 cart.push(obj)
 return `${item} has been added to your cart.`;
}


function viewCart() {

  if (cart.length === 1) { 
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length >= 3) {
    var string = "In your cart, you have"
    for (let i = 0; i < cart.length-1; i++) {
      string += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    return string + ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
} else { 
  return `Your shopping cart is empty.`
}
}


function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    var sum = cart[i].itemPrice
    total = total + sum
  } 
    return total;
}



function removeFromCart(item) {
let i = 0;
for (let i = 0; i < cart.length; i++) {
if (cart[i].itemName === item) {
  cart.splice(i, 1)
  return cart
}
}
 return `That item is not in your cart.`
}


function placeOrder(cardNumber) {
  const cartTotal = total();
  
  if (cardNumber) {
 cart.length = 0;
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
} else {
return `Sorry, we don't have a credit card on file for you.`
}
}