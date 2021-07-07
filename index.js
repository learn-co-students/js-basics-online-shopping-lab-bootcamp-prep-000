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
 cart.push(Object.assign({}, {itemName:item, itemPrice:Math.floor(Math.random()* (100 - 1) + 1)}))
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var longCart = []
    for(var i = 0; i < cart.length-1; i++) {
      longCart.push(' '+cart[i].itemName+' at $'+cart[i].itemPrice)
    }
    return `In your cart, you have${longCart}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  // write your code here
  var sum = 0
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  //Iterate through cart looking for item
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      //Remove item
      cart.splice(i, 1)
      return cart
    }
    //Returns statement if item not found. Must be outside the if statement (without else) to iterate through the whole cart array
  } return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    //Store message with info before clearing cart or the total will be 0!
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  }
}
