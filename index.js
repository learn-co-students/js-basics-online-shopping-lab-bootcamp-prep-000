
//Empty Array
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  var items = {itemName: item, itemPrice: price, }
  cart.push(items);
  return `${item} has been added to your cart.`
}



function viewCart() {
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
  else if (cart.length === 2) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  
  else if (cart.length === 0 ) {
    return 'Your shopping cart is empty.'
  }
    
  else {
    let cartItems = [];
    for ( var i = 0; i < cart.length - 1; i++) {
      cartItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    cartItems += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return `In your cart, you have ${cartItems}`
  }
  
      
  
}

function total() {
  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseFloat(cart[i].itemPrice);
  }
  return totalPrice;
  
}

function removeFromCart(item) {
 for (let i = 0; i < cart.length; i++) {
   if (cart[i].itemName === item) {
     cart.splice(i,1);
     return cart;
     }
 }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
    
  }
}




