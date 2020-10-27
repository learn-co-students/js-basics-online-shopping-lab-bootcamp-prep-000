var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var caritemObj = {itemName: `${item}`, itemPrice}
  cart.push(caritemObj)
  return (`${caritemObj.itemName} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return ('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  } else if (cart.length === 2) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  } else {
    var itemsList = "In your cart, you have"
    for (let i = 0; i < cart.length - 1; i++) {
      itemsList = itemsList + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    return itemsList + ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1); //removes 1 item at index i
      return cart;
    }
  }
  if (item != cart[item]) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "undefined"){
  return "Sorry, we don't have a credit card on file for you."
  } else {
    var bill = total()
    cart = []
    return (`Your total cost is $${bill}, which will be charged to the card ${cardNumber}.`)
  }
}
