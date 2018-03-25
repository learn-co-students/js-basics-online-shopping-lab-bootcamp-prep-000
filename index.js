var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: Math.ceil(Math.random() * 100)}
  cart.push(newItem)
  return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  var cartContains = 'In your cart, '
  
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    cartContains = cartContains + `you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return cartContains
  } else {
      for (let i = 0; i < cart.length; i++) {
        if (i === (cart.length - 1)) {
          cartContains = cartContains + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        } else if (i === 0) {
          cartContains = cartContains + `you have ${cart[i].itemName} at $${cart[i].itemPrice}, `
        } else {
          cartContains = cartContains + `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
      return cartContains
  }
}

function total() {
  var total = 0
  
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  
  return total
}

function removeFromCart(item) {
  var originalLength = cart.length
  
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[0].itemName) {
      cart = [...cart.splice(1)] 
    } else if (item === cart[i].itemName) {
      cart = [...cart.splice(0,i), ...cart.splice(i)]
    }
  }
  
  if (originalLength === cart.length) {
    return 'That item is not in your cart.'
  } else {
    return cart
  }
  
}

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  
}
