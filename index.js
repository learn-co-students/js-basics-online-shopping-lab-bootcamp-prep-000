var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = parseInt(Math.random() * 100)
  cart.push({ [itemName]: itemPrice })
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length == 1) {
      var itemName = Object.keys(cart[0])
      var itemPrice = cart[0][itemName]
      console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
  } else if (cart.length == 2) {
    var itemName = Object.keys(cart[0])
    var itemPrice = cart[0][itemName]
    var itemN2 = Object.keys(cart[1])
    var itemP2 = cart[1][itemN2]
    console.log(`In your cart, you have ${itemName} at $${itemPrice} and ${itemN2} at $${itemP2}.`)
  } else {
      var itemName = Object.keys(cart[0])
      var itemPrice = cart[0][itemName]
      var string = `In your cart, you have ${itemName} at $${itemPrice}, `
      for (var i = 1; i < cart.length - 1; i++) {
        itemName = Object.keys(cart[i])
        itemPrice = cart[i][itemName]
        string += `${itemName} at $${itemPrice}, `
      }
      var i = cart.length - 1
      itemName = Object.keys(cart[i])
      itemPrice = cart[i][itemName]
      console.log(`${string}and ${itemName} at $${itemPrice}.`)
  }
}

function total() {
  let total = 0
  for (var i = 0; i < cart.length; i++) {
    let itemPrice = cart[i][Object.keys(cart[i])]
    total += itemPrice
  }
  return total
}

function removeFromCart(item) {
  var count = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      if (i === 0) {
        cart.shift()
      } else if (i === cart.length - 1) {
        cart.pop()
      } else {
        let pre = cart.slice(0, i)
        let post = cart.slice(i + 1, cart.length)
        cart = pre.concat(post)
      }
      count += 1
    }
  }
  if (count === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber > 9999999) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
