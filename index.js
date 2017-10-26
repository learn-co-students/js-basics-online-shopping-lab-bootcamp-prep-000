var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  var newItem = { [item]: itemPrice }
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartNumber = cart.length
  var itemsList = 'In your cart, you have ';
  if (cartNumber === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cartNumber === 1){
    const key = Object.keys(getCart()[0])[0]
    console.log(`In your cart, you have ${key} at $${cart[0][key]}.`)
  } else if (cartNumber === 2) {
    const key = Object.keys(getCart()[0])[0]
      console.log(`In your cart, you have ${key} at $${cart[0][key]} and ${Object.keys(getCart()[1])[0]} at $${cart[1][Object.keys(getCart()[1])[0]]}.`)
  } else {
    for (var x = 0; x < cart.length; x++) {
      const obj = getCart()[x]
      const newKey = Object.keys(obj)[0]
      if (x === cart.length - 1) {
        itemsList += `and ${newKey} at $${obj[newKey]}.`
      } else {
        itemsList += `${newKey} at $${obj[newKey]}, `
      }
      console.log(itemsList)
    }
  }
}
addToCart("orange");
addToCart("pear");

console.log(viewCart())

function total() {
  var totalValue = 0
  for (var y = 0; y < cart.length; y++) {
    const obj = getCart()[y]
    const newKey = Object.keys(obj)[0]
      totalValue += obj[newKey]
  }
  return totalValue
}

function removeFromCart(item) {
  for (var x = 0; x < cart.length; x++) {
    if (getCart()[x].hasOwnProperty(item)) {
      cart.splice(x, 1)
          return getCart()
  }
}
 {  console.log('That item is not in your cart.')
  }
}


function placeOrder(cardNumber) {
    if (cardNumber) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = []
    }
    else {
      console.log(`Sorry, we don't have a credit card on file for you.`)
    }
  }

console.log(placeOrder(74855230))
