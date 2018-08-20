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
 var price = Math.floor(Math.random() * 101); 
 var newCartItem= {
    itemName: item,
    itemPrice: price
  }
  cart.push(newCartItem)
  return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  var currentCart = "In your cart, you have "
  if (cart.length === 0) {
    currentCart =  "Your shopping cart is empty."
  } else if (cart.length === 1) {
    currentCart = currentCart + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  } else {
    for (var i = 0; i < cart.length - 1 ; i++) {
      currentCart = currentCart + cart[i].itemName + " at $" + cart[i].itemPrice + ", "
    }

    var lastCartItem  = cart.slice(-1)

    currentCart = currentCart + "and " + lastCartItem[0].itemName + " at $" + lastCartItem[0].itemPrice + "."
  }
  return currentCart
}

function total() {
  // write your code here
  var cartTotal = 0
  for (var i = 0; i < cart.length ; i++) {
    cartTotal = cartTotal + cart[i].itemPrice
  }
  return cartTotal
}

function removeFromCart(item) {
  // write your code here
  var returnedItem = 'That item is not in your cart.'
  for (var i = 0; i < cart.length ; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      returnedItem = cart
    } 
  }

  return returnedItem
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var chargeAmount = total()
    var orderPlaced = "Your total cost is $" + chargeAmount + ", which will be charged to the card " + cardNumber + "."
    cart = []
    return orderPlaced
  }
}
