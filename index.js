var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var newItem = {[item] : getRandomInt(1,100)}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    let announce = `In your cart, you have `
    for (let i = 0; i < cart.length; i++) {
      let itemName = Object.keys(cart[i])[0];
      let itemPrice = cart[i][Object.keys(cart[i])];
      if (cart.length === 1) {
        announce += `${itemName} at $${itemPrice}.`
      } else if (cart.length === 2 && i === 0) {
        announce += `${itemName} at $${itemPrice} `
      } else if (i === cart.length - 1) {
        announce += `and ${itemName} at $${itemPrice}.`
      } else if (i != 0) {
        announce += `${itemName} at $${itemPrice}, `
      } else {
        announce += `${itemName} at $${itemPrice}, `
      }
    }
    console.log(announce)
  }
}

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (! cart[i].hasOwnProperty(item)) {}
    else {
      cart.splice(i,1);
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  return cart
}
