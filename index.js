var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1
  cart.push({itemName:`${item}`, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  let string = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]["itemName"]
    let price = cart[i]["itemPrice"]
    if (cart.length === 1 && cart.length === i + 1) {
      string += `${item} at $${price}.`
    } else if (cart.length > 1 && cart.length === i + 1) {
      string += `and ${item} at $${price}.`
    } else if (cart.length === i + 2) {
      string += `${item} at $${price} `
    } else {
      string += `${item} at $${price}, `
    }
  }
  if (cart.length < 1) {
    string = "Your shopping cart is empty."
  }
  return string
}

function total() {
  let price = 0
  for (let i = 0; i < cart.length; i++) {
    price += cart[i]["itemPrice"]
  }
  return price
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      cart.splice(i, 1)
      console.log(`Removed ${item}`)
      console.log(cart)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  total()
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return string
  }
}
