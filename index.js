var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {};
 itemObj['itemName'] = item;
 itemObj['itemPrice'] = Math.floor((Math.random() * 100) + 1)
 
 cart.push(itemObj);
 return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  var finalStr = "In your cart, you have "
  
  for (var i = 0; i < cart.length; i++) {
    var currentObj = cart[i];
    var currentItem = currentObj['itemName'];
    var currentPrice = currentObj['itemPrice'];
    
    if (cart.length === 1) {
      finalStr += currentItem + " at " + '$' + currentPrice + '.';
    }
    
    if (cart.length !== 1 && i !== cart.length - 1) {
      finalStr += currentItem + " at " + '$' + currentPrice + ', '; 
    }
    
    if (cart.length !== 1 && i === cart.length - 1) {
      finalStr += "and " + currentItem + " at " + '$' + currentPrice + '.';
    }
  }
  
  return finalStr;
}

function total() {
  var sum = 0;
  
  for (var j = 0; j < cart.length; j++) {
    var currentObj = cart[j];
    var currentPrice = currentObj['itemPrice'];
    
    sum += currentPrice;
  }
  
  return sum;
}

function removeFromCart(item) {
  
  for (var i = 0; i < cart.length; i++) {
    var currentObj = cart[i];
    var currentItem = currentObj['itemName'];
    
    if (currentItem === item) {
      cart.splice(i, 1);
      return;
    }
  }
  
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  var final = total();
  
  cart = [];
  
  return "Your total cost is " + '$' + final + ", which will be charged to the card " + cardNumber + '.'; 
}
