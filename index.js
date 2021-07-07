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
 var price = Math.floor(Math.random() * 100) + 1
 var itemObj = {}
 
 itemObj.itemName = item
 itemObj.itemPrice = price
 
 cart.push(itemObj)
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if(cart.length === 1) {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
  } else {
    var items = []
    
    for(let i = 0; i < cart.length; i++) {
      if(i === cart.length - 1) {
          items.push('and ' + cart[i]['itemName'] + ' at $' + cart[i]['itemPrice'])
      } else {
        items.push(cart[i]['itemName'] + ' at $' + cart[i]['itemPrice'])
      }
    }
  }
  return 'In your cart, you have ' + items.join(", ") + '.'
}

function total() {
  // write your code here
  
  var currentTotal = 0
  
  for(let i = 0; i < cart.length; i++) {
      currentTotal += cart[i]['itemPrice']
  }
  return currentTotal
}

function removeFromCart(item) {
  // write your code here
  var itemFound = false
  
  for(let i = 0; i < cart.length; i++) {
    if(cart[i]['itemName'] === item) {
      itemFound = true
      cart.splice(i, 1)
    }
  } 
  if(!itemFound) {
    return 'That item is not in your cart.'
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    var cartTotal = total()
    cart.length = 0
  }
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
