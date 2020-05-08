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
  var cartItem = { [item]: price }
  cart = [...cart, cartItem]
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getItemKeyAndValue(item) {
  var itemKeys = Object.keys(item);
  if (itemKeys.length == 1) {
    var itemKey = Object.keys(item)[0]
    var itemVal = item[itemKey]
    return [itemKey, itemVal]
  }
}

function viewCart() {
  var message = 'In your cart, you have'
  var len = cart.length
  var lastIndex = len - 1
  var item
  var itemPrice
  if (len == 0) {
    message = 'Your shopping cart is empty.'
  } else if (len == 1) {
    [item, itemPrice] = getItemKeyAndValue(cart[0])
    message += ` ${item} at $${itemPrice}.`
  } else {
    for (var i = 0; i < len; i++) {
      [item, itemPrice] = getItemKeyAndValue(cart[i])
      if (i !== lastIndex) {
        message += ` ${item} at $${itemPrice},`
        if (len == 2) {
          message = message.substring(0, message.length - 1)
        }
      } else {
        message += ` and ${item} at $${itemPrice}.`
      }
    }
  }
  console.log(message)
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    var [__, itemPrice] = getItemKeyAndValue(cart[i])
    sum += parseInt(itemPrice)
  }
  return sum
}

function removeFromCart(item) {
  var len = cart.length
  var lastIndex = len - 1
  for (var i = 0; i < len; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice(i+1)]
      return
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
