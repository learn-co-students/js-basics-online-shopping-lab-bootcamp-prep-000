var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var name = item
 var price = parseInt(Math.random() * 100)
 var addCart = {itemName: name, itemPrice: price}
 cart.push(addCart)
 return name + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var cartSent = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && cart.length !== 1) {
        cartSent += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else if (cart.length === 1) {
        cartSent += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        cartSent += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
    return cartSent
  }
}

function total() {
  var tot = 0
  for (var i=0; i < cart.length; i++) {
    tot += cart[i].itemPrice
  }
  return tot
}

function removeFromCart(item) {
  var itemCheck = null
  for (var i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      itemCheck = i
      break ;
    }
  }
  if (itemCheck === null) {
    return "That item is not in your cart."
  } else {
    cart.splice(itemCheck, 1)
  }
  return cart  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return order
  }
}
