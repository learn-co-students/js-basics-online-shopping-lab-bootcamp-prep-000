var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObj = {itemName: item, itemPrice: Math.floor(Math.random() * (100 +1))};
 cart.push(newObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  var print = "In your cart, you have "
  if (cart.length > 0) {
  for (let i=0; i<cart.length; i++) {
    print += Object.values(cart[i])[0] + " at $" + Object.values(cart[i])[1]
    if (i+1 < cart.length) {
      print += ', '
      if (i+2 === cart.length) {
        print += 'and '
      }
    }
  }
  return print + '.'
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[1]
  }
  return total
}

function removeFromCart(item) {
  var index = -1
  for (let i = 0; i< cart.length; i++) {
    if (Object.values(cart[i])[0] === item)
      index = i
  }
  if (index === -1) {
    return "That item is not in your cart."
  }
  else {
    return cart.splice(index, 1)
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    return "Sorry, we don't have a credit card on file for you."
  else {
    var cost = total()
    cart = []
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
cart = [{a: 3, b: 2}, {e: 3, k: 3}]
console.log(Object.values(cart[0])[0])
console.log(total())
placeOrder(222)