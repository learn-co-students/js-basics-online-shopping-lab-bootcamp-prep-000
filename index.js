var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
        itemName: item,
        itemPrice: Math.floor(Math.random()*101)
    })
    return `${item} has been added to your cart.`
}

function viewCart() {
  const introText = 'In your cart, you have '
      const message = []

      if (!cart.length) {
          return 'Your shopping cart is empty.'

      } else if (cart.length === 1) {
          cart.forEach(function (item) {
              message.push(item.itemName + ' at $' + item.itemPrice + '.')
              })
          return introText + message

      } else if (cart.length >= 2) {
          cart.forEach(function (item) {
              message.push(item.itemName + ' at $' + item.itemPrice + ', ')
              })
          const removed = message.splice(message.length -1).toString().slice(0, -2)
          message.push('and ',removed, '.')
          return introText + message.join('')
      }
}

function total() {
  let sum = 0
  cart.forEach(function (product) {
      sum = sum + product.itemPrice
      })
  return sum
}

function removeFromCart(item) {
    let message = 'That item is not in your cart.'
    cart.forEach(function(array, index) {
        if (array.itemName === item) {
            cart.splice(index, 1)
            message = cart
        }
    })
    return message
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
      return 'Sorry, we don\'t have a credit card on file for you.'
} else {
      const value = total()
      cart.splice(0,cart.length)
      return `Your total cost is $${value}, which will be charged to the card ${cardNumber}.`
}
}
