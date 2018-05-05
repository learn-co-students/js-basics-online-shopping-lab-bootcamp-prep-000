var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 const item = {
  itemName : itemName,
  itemPrice : Math.floor(Math.random() * 100) + 1
 }
 cart.push(item)
 return `${itemName} has been added to your cart.`
}

function getMessageForEmptyCart() {
  return "Your shopping cart is empty."
}

function getMessageforSingleItemCart() {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}

function getMessageforMultiItemCart() {
  let cartSummary = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        cartSummary += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
      cartSummary += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
    return cartSummary
}

function viewCart() {
  if (cart.length === 0) {
    return getMessageForEmptyCart()
  } 
  if (cart.length === 1) {
    return getMessageforSingleItemCart()    
  } else {
    return getMessageforMultiItemCart()
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."

}

function emptyCart() {
  return cart.splice(0, cart.length)
}

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function placeOrder(cardNumber) {
 if (cardNumber === undefined) {
   return "Sorry, we don't have a credit card on file for you."
 } 
 const currentTotal = total()
 emptyCart()
 return `Your total cost is $${currentTotal}, which will be charged to the card ${cardNumber}.`
}
