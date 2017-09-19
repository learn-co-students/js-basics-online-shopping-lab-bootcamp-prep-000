var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var thingies = Object.assign({}, {[item] : price})
  cart.push(thingies)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var shopping = []
  if (cart.length > 0) {
    for (var x = 0; x < cart.length; x++) {
      for (var item in cart[x]) {
        shopping.push(item + ' at $' + cart[x][item])
      }
    }
  }

  if (shopping.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (shopping.length === 1) {
    console.log(`In your cart, you have ${shopping[0]}.`)
  } else if (shopping.length === 2) {
    console.log(`In your cart, you have ${shopping[0]} and ${shopping[1]}.`)
  } else if (shopping.length >= 3) {
    var start = shopping.slice(0, shopping.length -1).join(', ')
    console.log (`In your cart, you have ${start}, and ${shopping[shopping.length-1]}.`)
  }
}

function total() {
  var price = 0
  for (var p = 0; p < cart.length; p++) {
    price += cart[p][Object.keys(cart[p])]
    }
    return price
}

function removeFromCart(item) {
  for (var x = 0; x < cart.length; x++) {
    if (cart[x].hasOwnProperty(item)) {
      cart.splice(x, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
