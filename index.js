var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  let cartItem = {'itemName':item, 'itemPrice':price}
  cart.push(cartItem)
  return `${item} has been added to your cart.`
  return cart
}

function viewCart() {
  if (cart.length === 0) {
      return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  } else {
    let message = 'In your cart, you have '
    for (let i = 0; i < cart.length - 1; i++) {
      message = message + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
    }
    return message + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  let priceArray = []
  for (let i = 0; i < cart.length; i++) {
    priceArray.push(getCart()[i].itemPrice)
  } let arraySum = priceArray.reduce((a, b) => {
    return a + b
  }) 
  return arraySum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
    cart.splice(i, 1)
    return cart
    } 
  } return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
   return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    let totalPrice = total();
    setCart([]);
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  } 
}
