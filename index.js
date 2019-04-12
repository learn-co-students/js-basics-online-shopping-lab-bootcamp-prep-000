var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 101)
 let newItem = {
   itemName: item,
   itemPrice: price
 }
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    let result = 'In your cart, you have '
    for (let i = 0; i < (cart.length - 1); i++) {
      result = result + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    if (cart.length == 1) {
      result = result + `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    } else {
      result = result + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    }
    return result
  }
}

function total() {
  let result = 0
  for (let i = 0; i < cart.length; i++) {
    result = result + cart[i].itemPrice
  }
  return result
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, i)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    var cartTotal = total()
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
