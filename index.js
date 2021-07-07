var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)+1};
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var currentCart = "In your cart, you have";
    for (var i=0; i<cart.length-1; i++) {
      currentCart += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    currentCart += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return currentCart
  }
}

function total() {
  var cartSum = 0;
  for (var i=0; i<cart.length; i++) {
    cartSum = parseInt(cartSum) + parseInt(cart[i].itemPrice)
  }
  return cartSum
}

function removeFromCart(item) {
  var deletedItem = []
  for (var i=0; i<cart.length;) {
    if (item == cart[i].itemName) {
      deletedItem += cart.splice(i, 1)
    } else {
        var i= i+1
      }
  }
  if (deletedItem.length == 0) {
    return "That item is not in your cart."
  } else {
      return cart
    }
}

function placeOrder(cardNumber="none") {
  if (cardNumber == "none") {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var checkOut = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return checkOut
  }
}
