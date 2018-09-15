var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var number = Math.random() * 10
  var object = {itemName:item, itemPrice:number}
  cart.push(object)
  return cart[cart.length - 1].itemName + ' has been added to your cart.'
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
      var array = []
      for (var i = 0; i < cart.length - 1; i++) {
        array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      for (i = 0; i < array.length; i++) {
          console.log(`${array[i]}`)
          var insert = `In your cart, you have${array}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
          return insert
      }
  }
}
var sum = 0
function total() {
  sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++)
  if (cart[i].itemName === item) {
    cart.splice(i, 1)
    return cart
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
