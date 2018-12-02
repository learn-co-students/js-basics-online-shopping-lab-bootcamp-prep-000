var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    let info = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `
    for (let i = 1; i < cart.length - 1; i++) {
      info += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    info += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return info
  }
}

function total() {
  let total = 0;
  for (const item of cart){
    total += item.itemPrice
  }
  return total
}

function removeFromCart(item) {
  if (cart.find(cartItem => cartItem.itemName === item)) {
    let targetItem = cart.find(cartItem => cartItem.itemName === item);
    let position = cart.indexOf(targetItem)
    cart.splice(position, 1);
    return cart;
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let totalCost = total()
    cart.length = 0
    debugger
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
