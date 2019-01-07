var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // generate random integer price in range [1, 100]
  cart.push({[item]: Math.floor(Math.random() * 100) + 1})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`)
  } else {
    var retval = 'In your cart, you have '
    var key
    switch (cart.length) {
      case 1:
        key = Object.keys(cart[0])[0]
        retval += `${key} at \$${cart[0][key]}.`
        break
      case 2:
        key = Object.keys(cart[0])[0]
        retval += `${key} at \$${cart[0][key]} and `
        key = Object.keys(cart[1])[0]
        retval += `${key} at \$${cart[1][key]}.`
        break
      default:
        for (let i in cart) {
          if (i == cart.length - 1) {
            retval += ', and '
          } else if (i > 0) {
            retval += ', '
          }
          key = Object.keys(cart[i])
          retval += `${key} at \$${cart[i][key]}`
        }
        retval += '.'
        break
    }
    console.log(retval)
  }
}

function total() {
  var total = 0
  for (let item of cart) {
    total += item[Object.keys(item)[0]]
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; ++i) {
    if (cart[i].hasOwnProperty([item])) {
      cart.splice(i, 1) // remove 1 at position 'i'
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
