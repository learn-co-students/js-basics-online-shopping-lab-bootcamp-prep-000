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
 var object = {itemName: item, itemPrice: price}
 cart.push(object)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var s = 'In your cart, you have '
  var at = ' at $'
  var line = ''
  
    if (cart.length == 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    if (cart.length > 1) {
      for (var i = 0; i < cart.length; ++i) {
        line = line + `${i < cart.length - 1 ? '' : 'and '}` + `${cart[i].itemName}` + at +`${cart[i].itemPrice}` + `${i < cart.length - 1 ? ', ' : '.'}`
    }
    } else {
      return 'Your shopping cart is empty.'
    }
  return s + line
}

function total() {
  // write your code here
  var dollars = 0
  
  for (var i = 0; i < cart.length; ++i) {
    dollars = dollars + cart[i].itemPrice
  }
  return dollars
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; ++i) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."  
}

function placeOrder(cardNumber) {
  // write your code here
  var dollars = 0
  
  for (var i = 0; i < cart.length; ++i) {
    dollars = dollars + cart[i].itemPrice
  }
  if (cardNumber > 0) {
    cart = []
    return `Your total cost is $${dollars}, which will be charged to the card ${cardNumber}.`
  }
    
  return "Sorry, we don't have a credit card on file for you."
}






