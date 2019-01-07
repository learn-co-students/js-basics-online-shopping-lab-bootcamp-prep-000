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
 var newPrice = Math.floor(Math.random() * 100) + 1
 var newItem = {
   [item]: newPrice
 }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)

 return cart
}

function viewCart() {
  // write your code here
  //empty
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var outStr = `In your cart, you have `

    for (var i = 0; i < cart.length; i++) {
      var item = cart[i]
      var itemName = Object.keys(cart[i])[0]
      var itemPrice = cart[i][itemName]
      //single item or last item in cart
      if (i == cart.length - 1) {
        outStr += `${itemName} at $${itemPrice}.`
      }
      //penultimate item where cart has only two items
      else if (i == cart.length - 2 && cart.length == 2) {
        outStr += `${itemName} at $${itemPrice} and `
      }
      //penultimate item where cart has > two items
      else if (i == cart.length - 2 && cart.length !== 2) {
        outStr += `${itemName} at $${itemPrice}, and `
      }
      //subsequent items
      else {
        outStr += `${itemName} at $${itemPrice}, `
      }
    }
    console.log(outStr)
  }
}

function total() {
  // write your code here
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var itemName = Object.keys(item)[0]
    var itemPrice = item[itemName]

    totalCost += itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    var cartItem = cart[i]
    if (cartItem.hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
