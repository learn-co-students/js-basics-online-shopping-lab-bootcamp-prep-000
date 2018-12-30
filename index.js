var cart = [];
var totalPrices = 0

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({itemName: item, itemPrice: getRandomInt()})
return `${item} has been added to your cart.`
}

function getRandomInt() {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function viewCart() {
   if (!cart.length) {
    return "Your shopping cart is empty."
  }
  const cartItems = []

  for (let i = 0, l = cart.length; i < l; i++) {
    if((i < (l - 1)) || (l === 1)){
    cartItems.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`)
    
    } else if((i === (l - 1)) && (l > 1)){
    cartItems.push(`and ${cart[i].itemName} at \$${cart[i].itemPrice}`)
    }
  }
  return `In your cart, you have ${cartItems.join(', ')}.`
}

function total() {
  totalPrices = 0
  for (let i = 0, l = cart.length; i < l; i++) {
    totalPrices += cart[i].itemPrice
  }
  return totalPrices
}

function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].itemName === item){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  cart = []
  return `Your total cost is \$${totalPrices}, which will be charged to the card ${cardNumber}.`
}
