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
  var price = Math.floor(Math.random() * (100 - 1) + 1);
  var itemObj = {itemName: item, itemPrice: price} ;
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  const message = [];
  
  for (let i = 0; i < cart.length; i++){
    message.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    
    if (cart.length > 1 && cart.length < 3) {
      message.push(`${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}`)
    
      return `In your cart, you have ${message[i]}, and ${message[i + 1]}.`;
    } 
    
    else if (cart.length >= 3) {
      message.push(`${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}`)  
      message.push(`${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}`)
      
      return `In your cart, you have ${message[i]}, ${message[i + 1]}, and ${message[i + 2]}.`
    } 
    
    else if (i === 0) {
      
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`  
    }
  }
  return `Your shopping cart is empty.`;
}


console.log(getCart())

function total() {
  // write your code here
  let totalPrice = 0
  
  for (let i = 0; i < cart.length; i++) {
    
    if (totalPrice === 0) {
      totalPrice = cart[i].itemPrice
    } 
    
    else if (i < cart.length) {
      totalPrice += cart[i].itemPrice
    }
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    
    if (item === cart[i].itemName) {
      cart.splice([i], 1)
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  let returnMessage
  
  if (typeof cardNumber == 'number') {
    
    returnMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    
    cart.splice(0, cart.length)
    
    return returnMessage
  } 
  
  else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}
