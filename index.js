var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newItem = {itemName: item, itemPrice: 
(Math.floor(Math.random() * 100) + 1)
  };
cart.push(newItem)
  return (`${item} has been added to your cart.`)
}


function viewCart() {
 
 
  if (cart.length === 0) {
    return "Your shopping cart is empty." 
    
  }
  
  else if (getCart().length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  else if (getCart().length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
    var results = "In your cart, you have "
    for (let i=0; i < getCart().length -1; i++) {
      results += getCart()[i].itemName + " at $" + getCart()[i].itemPrice + ", "
    }
    results += "and " + getCart()[getCart().length-1].itemName + " at $" + getCart()[getCart().length-1].itemPrice + "."  
    return results 
    
}

     
function total() {
  
 var totalPrice = 0;
  for (let i=0; i < getCart().length; i++) {
     totalPrice += getCart()[i].itemPrice;
 }
  return totalPrice;
}

function removeFromCart(name) {
  for (let i=0; i < cart.length; i++) {
    if (cart[i].itemName === name) {
      cart.splice(i, 1); 
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
 if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you." }
   else {
    var totalCart = total()
    cart = [];
    return `Your total cost is $${totalCart}, which will be charged to the card ${cardNumber}.`
     
   }
   
 }
