var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push ({itemName: item, itemPrice: Math.floor(Math.random()*100)+1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1)
  {
    return 'Your shopping cart is empty.'
  }
  else
  {
    let msg = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        msg += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
      }
      else if (i < cart.length-1 && cart.length > 1){
        msg += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
      }
      else {
        msg += `and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
      }
    }
    return msg
  }
}

function total() {
  // write your code here
  let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += getCart()[i].itemPrice
    }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let formerLength = cart.length
    for (let i = 0; i < cart.length; i++) {
      if (item === getCart()[i].itemName) {
        cart.splice(i,1)
      }
    }
    if (formerLength === cart.length) {
      return 'That item is not in your cart.'
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    const amount = total()
    cart = []
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
  }
  
}
