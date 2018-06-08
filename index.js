var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(100*Math.random())
  })
 return `${item} has been added to your cart.`
}

function viewCart() {
  var totalItems = cart.length
  if (totalItems === 0) {
    return "Your shopping cart is empty."
  } else if (totalItems == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var firstToBeforeLastItems = []
    for (var i=0; i<totalItems-1; i++) {
       firstToBeforeLastItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have${firstToBeforeLastItems}, and ${cart[totalItems-1].itemName} at $${cart[totalItems-1].itemPrice}.`
  }
}

function total() {
  var sum = 0
  for (let i=0; i<cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var itemIndex=-1 // If initialized to zero, then item would be part of the cart :P. NOTE: following task can be simplified using Array.indexOf
  for (let i=0; i<cart.length; i++) {
    if(cart[i].itemName == item) {itemIndex=i}
  }
  if(itemIndex >= 0) {
    cart.splice(itemIndex, 1)
    return cart //or use: getCart()
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === null || cardNumber === undefined || cardNumber === '' || cardNumber === ' ') {
    return "Sorry, we don\'t have a credit card on file for you."
  } else {
    var totalCharged = total()
    setCart([]) // empties cart
    return `Your total cost is $${totalCharged}, which will be charged to the card ${cardNumber}.`
  }
}
