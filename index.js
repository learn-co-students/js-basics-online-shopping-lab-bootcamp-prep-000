var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {itemName: item, itemPrice: Math.floor(Math.random(1) * 101)};
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  let text = 'In your cart, you have'
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `${text} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `${text} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    for (let i=0; i<cart.length - 1; i++) {
      text = `${text} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    return `${text} and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  let sum = 0;
  cart.forEach((item) => sum += item.itemPrice)
  return sum
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
