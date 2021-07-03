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
 var empty = { itemName: item,
 itemPrice: Math.floor(Math.random() * 100)}
 cart.push(empty)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var empty = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    for (var i = 0; i < cart.length; i++) {

      if (cart.length === 1) {
        empty.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
      }

      else if (cart.length === 2) {
        empty.push(`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`)
      }
      else {
        empty.push(`${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}` )
      }
      return `In your cart, you have ${empty}.`
    }
  }
}

function total() {
  var totalCost = 0;
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice
  } return totalCost
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return cart
    }
  } return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
  
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return message
  }

}
