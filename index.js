var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.ceil(Math.random()*100)
 var newItem = {itemName: item, itemPrice: price}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartLength = cart.length
  if (cartLength === 0)
    return `Your shopping cart is empty.`

  var newArray = []
    for (let i = 0; i < cartLength; i++) {
      newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }

  var intro = `In your cart, you have`
  if (cartLength === 1)
    return `${intro} ${newArray[0]}.`
  if (cartLength === 2)
    return `${intro} ${newArray[0]}, and ${newArray[1]}.`
  if (cartLength > 2) {
    for (let i = 0; i < cartLength-1; i++) {
        intro = `${intro} ${newArray[i]},`
    }
    intro = `${intro} and ${newArray[cartLength-1]}.`
    return intro
  }
}

function total() {
  var total = 0
  for(let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var x = 0
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      x++
    }
  }
  if (x === 0)
    return `That item is not in your cart.`
  else
    return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber)
    return `Sorry, we don't have a credit card on file for you.`
  else
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
}
