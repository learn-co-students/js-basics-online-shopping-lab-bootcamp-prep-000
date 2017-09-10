var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addToCart(item) {
  var itemPrice = getRandomInt(1, 101)
  cart.push({[item] : itemPrice})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var outputString = "In your cart, you have"

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length === 1) {
      outputString += ` ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
      console.log(outputString)
    }
  else if (cart.length === 2) {
      outputString += ` ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
      console.log(outputString)
  }
  else {
    for (var i = 0; i < cart.length - 1; i++) {
      outputString += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
    }
    outputString += ` and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}.`
    //console.log(cart[cart.length - 1])
    console.log(outputString)
  }

}

function total() {
  var keys = new Array();
  var totalCost = 0

  for (var i = 0; i < cart.length; i++) {
    keys.push(Object.keys(cart[i]))
    console.log(keys)
  }
  for (var i = 0; i < keys.length; i++) {
    totalCost += cart[i][keys[i]]
  }
  return totalCost
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      cart.splice(i , 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}


//cart = [{bananas : 17}, {apples : 25}, {oranges : 36}]


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
  }
}
