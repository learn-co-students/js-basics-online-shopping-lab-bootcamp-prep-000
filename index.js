var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cartItem = Object.assign({}, {'itemName' : item}, {'itemPrice': Math.random() * Math.floor(100)})
 cart.push(cartItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartMessage = "In your cart, you have"
  
  if (cart.length === 1){
    cartMessage = cartMessage + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return cartMessage
  }
  else if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      if (i === cart.length - 1) {
        cartMessage = cartMessage + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }else{
        cartMessage = cartMessage + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
    }
    return cartMessage
  }else{
    return 'Your shopping cart is empty.'
  }
}

function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++){
    cartTotal = cartTotal + cart[i].itemPrice
  }
  return cartTotal
}

function removeFromCart(item) {
  var numOfItemsToBeRemoved = 0
  
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1)
      numOfItemsToBeRemoved += 1
    }
  }
  if (numOfItemsToBeRemoved === 0) {
    return "That item is not in your cart."
  }else{
    return cart
}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}

