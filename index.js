var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
  cart.push(newItem)
  return `${item} has been added to your cart.`
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  var cartContents = []
  for (var i = 0; i < cart.length; i++) {
    var items = Object.values(cart[i])[0]
    var price = Object.values(cart[i])[1]
    cartContents.push(` ${items} at $${price}`)
    }
    var message = `In your cart, you have`
    if (cartContents.length === 1) {
      return `${message}${cartContents}.`
    } else if (cartContents.length === 2) {
      return `${message}${cartContents[0]}, and${cartContents[1]}.`
    } else if (cartContents.length > 2) {
      var lastItem = cartContents.pop()
      return `${message}${cartContents}, and${lastItem}.`
    }
  }

function total() {
  var itemsTotal = []
  var sum = 0

  for (var i = 0; i < cart.length; i++) {
    var itemPrice = Object.values(cart[i])[1]
    itemsTotal.push(itemPrice)
  }
  for (var t = 0; t < itemsTotal.length; t++) {
    sum = itemsTotal[t] += sum
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
      }
    }
    return `That item is not in your cart.`
  }

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  var totalCost = total()
  cart = []
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}
