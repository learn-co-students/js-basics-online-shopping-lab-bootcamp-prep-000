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
 var currentItem = {};
 currentItem.itemName = item;
 currentItem.itemPrice = Math.floor(Math.random()*100);
 cart.push(currentItem);
 return `${currentItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var itemString;
  var grammarString = '';
  var fullString = '';
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      itemString = '';
      grammarString = '';
      
      if (i < cart.length && cart.length !==1 && i !==0) {
        grammarString += `, `;
        if (i === cart.length -1) {
          grammarString += `and `
        }
      }
      itemString = grammarString + `${cart[i].itemName} at $${cart[i].itemPrice}`
      fullString += itemString
    }  
    
    return `In your cart, you have ${fullString}.`
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var currentTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    currentTotal += cart[i].itemPrice;
  }
  
  return currentTotal
}

function removeFromCart(item) {
  // write your code here
  
  var noItem = true;
  for (var i =0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      noItem = false;
    }
  }
  
  if(noItem) {
    cart = 'That item is not in your cart.';
  }
  
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  var finishedTransaction;
  if (cardNumber == null) {
    finishedTransaction = "Sorry, we don't have a credit card on file for you."
  } else {
    finishedTransaction = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
  }
  
  return finishedTransaction
  
}
