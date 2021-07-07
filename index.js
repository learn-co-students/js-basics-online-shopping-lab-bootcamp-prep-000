var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1)
  var item = { itemName: `${item}`, itemPrice: price }
  cart.push(item)
  return `${item['itemName']} has been added to your cart.`
 }

function viewCart() {
  var string = []
  if (cart.length === 0) {
    string.push("Your shopping cart is empty.")
  }
  if (cart.length === 1) {
    string.push(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  if (cart.length === 2) {
    string.push(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${ cart[1].itemPrice}.`)
  }

  if (cart.length > 2) {
    // create a new empty array
    var array = []
    let i = 0
    for (i = 0; i < cart.length - 1; i++) {
      // push `${ cart.itemName } at ${ cart.itemPrice }` into empty array
      array.push(` ${ cart[i].itemName } at $${ cart[i].itemPrice }`)
    }

    var lastElement = []
      lastElement.push(`${ cart[cart.length - 1].itemName } at $${ cart[cart.length - 1].itemPrice }`)

    // create a variable that keeps the last element of new array
    // remove last element from new array

    string.push(`In your cart, you have${array}, and ${lastElement}.`)
  }

  return string
}

function total() {
  var sum = 0
  for (let n = 0; n < cart.length; n++) {
    sum += cart[n].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var total2 = []
    total2.push(total())
    cart = []
    return `Your total cost is $${total2}, which will be charged to the card ${cardNumber}.`
  }
}
