var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = () => { return Math.floor(Math.random() * 100) }
  const addedItem = { [item]: price() }
  cart.push(addedItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
    const message = 'Your shopping cart is empty.'
    console.log(message)
    return message
  } else {
    const items = []
    for (var i = 0; i < cart.length; i++) {
      const item = Object.keys(cart[i])[0]
      const price = cart[i][item]
      items.push(`${item} at $${price}`)
    }
    if (items.length > 1) {
      const last_index = items.length - 1
      items[last_index] = `and ${items[last_index]}`
    }
    console.log("Items:", items)
    if (items.length > 2) {
      var joined_items = `${items.join(', ')}`
    } else {
      var joined_items = `${items.join(' ')}`
    }
    const message = `In your cart, you have ${joined_items}.`
    console.log(message)
    return message
  }
}

function total() {
  let sum = 0
  for (var i = 0; i < cart.length; i++) {
    const item = cart[i]
    for (var prop in item) {
      if (item.hasOwnProperty(prop)) {
        sum += item[prop]
      }
    }
  }
  return sum
}

function removeFromCart(toRemove) {
  let notFound = true
  for (var i = 0; i < cart.length; i++) {
    const item = cart[i]
    if (item.hasOwnProperty(toRemove)) {
      cart.splice(i, 1)
      notFound = false
    }
  }
  if (notFound) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    const message = "Sorry, we don't have a credit card on file for you."
    console.log(message)
    return cart
  }
  const receipt = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  console.log(receipt)
  return cart = []
}

addToCart("orange");
addToCart("pear");
addToCart("quince");
console.log('Cart: ', getCart());
placeOrder(1234);
