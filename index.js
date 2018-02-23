var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random(itemPrice) * (100-1)) + 1;
  var newItem = {[itemName]: itemPrice}
  cart.push(newItem)
  console.log(`${[itemName]} has been added to your cart.`)
  return cart
}

function viewCart() {
  const keyValue = []
  for (var i = 0; i < cart.length; i++) {
    var objectKey = Object.keys(cart[i])[0];
    var objectValue = cart[i][objectKey];
    keyValue.push(`${objectKey} at $${objectValue}`);
  }
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  } else if (cart.length === 2) {
    var twoItems = keyValue.join(' and ')
    console.log(`In your cart, you have ${twoItems}.`)
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${keyValue}.`)
  } else {
    keyValue[keyValue.length -1] = `and ${keyValue[keyValue.length -1]}`
    var oneSentence = keyValue.join(', ')
    console.log(`In your cart, you have ${oneSentence}.`)
  }
}

function total() {
  var prices = []
  for (var i = 0; i < cart.length; i++) {
    var objectKey = Object.keys(cart[i])[0];
    var objectValue = cart[i][objectKey];
    prices.push(objectValue)
  }
  var sumPrices = prices.reduce((a,b) => a+b)
  return sumPrices
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) { 
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart
    }
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  cart.length = 0
}