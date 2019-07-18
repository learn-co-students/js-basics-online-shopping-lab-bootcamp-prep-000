var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let rand = Math.floor(Math.random() * 100)
  let newObj = {
    itemName: item,
    itemPrice: rand,
  }
  cart.push(newObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    let items = 'In your cart, you have '
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        items += `${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}.`
        return items
      }
      else if (cart.length == (i + 1)) {
        items += `and ${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}.`
      }
      else {
        items += `${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}, `
      }
    }
    return items
  }
}

function total() {
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let total_cost = total()
    cart = []
    return `Your total cost is \$${total_cost}, which will be charged to the card ${cardNumber}.`
  }
}
