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
 
 var price = parseInt(Math.ceil(Math.random()*100));
 
 var newItem = {itemName: item, itemPrice: price};
 
 cart.push(newItem);
 
 return `${item} has been added to your cart.`;
 
}


function viewCart() {
  // write your code here
  
  var message = ''
  
  if (!cart.length) {
    message = `Your shopping cart is empty.`
    return message
    }
  
  else {
    message = 'In your cart, you have '
  }
  
  for (let i = 0; i < cart.length; i++) {
    message += `${cart[i].itemName} at $${cart[i].itemPrice}`
  

    if (i+1<cart.length ) {
      message += `, `
    }
    
    if (i+2==cart.length ) {
      message += `and `
    }
    
    if (i+1 == cart.length) {
      message += `.`
    }
    

  
  }
  
  return message
  
}


function total() {
  // write your code here
  
  var totalPrice = 0
  
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  
  for (let i = 0; i < cart.length; i++) {
    console.log(i)
    if (item === cart[i].itemName) {
      console.log('foo')
      cart.splice(i,1)
      return cart
    }
  
  }
  
  //if tests above fail
  return `That item is not in your cart.`
  
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (cardNumber) {
  
  var subtotal = total()
  cart = []
  
  return `Your total cost is $${subtotal}, which will be charged to the card ${cardNumber}.`
  
  }
  
  else {
    return `Sorry, we don't have a credit card on file for you.`
  }
  
}
