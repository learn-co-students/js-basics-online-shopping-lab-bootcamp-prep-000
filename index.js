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
 var itemPrice = Math.floor(99*Math.random()+1)
 cart.push({[item]: itemPrice})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length > 0) {
    var sentence = 'In your cart, you have'
    for(let i = 0; i < cart.length; ++i) {
      let itemName = Object.keys(getCart()[i])[0];
      let itemPrice = getCart()[i][itemName];

      if(cart.length > 2 && i > 0) {
        sentence += ','
      }
      if(cart.length > 1 && i === cart.length-1) {
        sentence += ' and'
      }
      sentence += ` ${itemName} at $${itemPrice}`
    }
    //finish the sentence with a period
    console.log(sentence += '.')
  }
  else {
    console.log('Your shopping cart is empty.')
  }
}

function total() {
  // write your code here
  var sum = 0
  for(let i = 0; i < cart.length; ++i) {
    let itemName = Object.keys(getCart()[i])[0];
    let itemPrice = getCart()[i][itemName];
    sum += itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; ++i) {
    if(getCart()[i].hasOwnProperty(item)) {
      return cart.splice(i,1)
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(typeof cardNumber == 'undefined') {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    //safe clear
    cart.length = 0
  }
}
