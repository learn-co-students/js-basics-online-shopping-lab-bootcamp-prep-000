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
 function getPrice() {
   return Math.floor(Math.random() * (100 - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
 }
 var itemName = item
 var newItem = {[itemName]: getPrice()}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    if (cart.length === 1) {
      var item = cart[0]
      var itemKey = Object.keys(item)
      var itemPrice = item[itemKey]
      var phrase = `In your cart, you have ${itemKey} at $${itemPrice}.`
      console.log(phrase)
      return phrase
    } else if (cart.length === 2) {
      var item1 = cart[0]
      var item2 = cart[1]
      var itemKey1 = Object.keys(item1)
      var itemKey2 = Object.keys(item2)
      var itemPrice1 = item1[itemKey1]
      var itemPrice2 = item2[itemKey2]
      var phrase = `In your cart, you have ${itemKey1} at $${itemPrice1} and ${itemKey2} at $${itemPrice2}.`
      console.log(phrase)
      return phrase
    } else if (cart.length > 2) {
      phrase = 'In your cart, you have '
      for (var i = 0; i < cart.length; i++) {
        var item = cart[i]
        var itemKey = Object.keys(item)
        var itemPrice = item[itemKey]
        if (i < cart.length - 1) {
          phrase = phrase + `${itemKey} at $${itemPrice}, `
        } else {
          phrase = phrase + `and ${itemKey} at $${itemPrice}.`
        }
      }
      console.log(phrase)
      return phrase
    }
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var itemKey = Object.keys(item)
    var itemPrice = item[itemKey]
    sum += itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var removed = false;
  for (var i = 0; i < cart.length; i++) {
    var selection = cart[i]
    if (selection.hasOwnProperty(item)) {
      cart.splice(i, 1)
      removed = true;
    }
  }
  if (removed === true) {
    return cart
  } else {
    console.log('That item is not in your cart.')
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber > 0) {
    var sum = total()
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
