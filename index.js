var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price =  Math.floor(Math.random() * Math.floor(100))
  var newitem = {itemName: item, itemPrice: price}
  cart.push(newitem)
  return `${newitem.itemName} has been added to your cart.`
}

function viewCart() {
  var newcart = ""
  for (let i = 0; i < cart.length; i++) {
    if (i === 0) {
      newcart = newcart + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    else if (i < cart.length - 1) {
      newcart = newcart + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    else if (i === cart.length - 1) {
      newcart = newcart + "and" + ` ${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  if (cart.length === 0) {
      return "Your shopping cart is empty."
  }
  else if (cart.length > 0) {
    return `In your cart, you have ${newcart.slice(0, -2)}.`
  }
}

function total() {
  var itemtotal = 0
  for (let i = 0; i < cart.length; i++) {
    itemtotal = itemtotal + parseInt(`${cart[i].itemPrice}`)
  }
  return itemtotal
}

function removeFromCart(item) {
  var itemposition = ""
  for (let i = 0; i < cart.length; i++) {
    if (item === `${cart[i].itemName}`) {
      itemposition = i
    }
  }
  if (itemposition === "") {
    return "That item is not in your cart."
  }
  else {
    cart = [...cart.slice(0, itemposition), ...cart.slice(itemposition + 1)]
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else if (cardNumber > 0) {
    var newtotal = total()
    cart = []
    return `Your total cost is $${newtotal}, which will be charged to the card ${cardNumber}.`

  }
}
