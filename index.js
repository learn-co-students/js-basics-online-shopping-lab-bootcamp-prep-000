var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {};
 obj.itemName = item;
 obj.itemPrice = Math.floor(Math.random() * 100 + 1)
 
 cart.push(obj);
 
 return `${obj.itemName} has been added to your cart.`
}

function viewCart() {
  var list = '';

  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    if (cart.length === 1) {
      return `In your cart, you have ${obj.itemName} at $${obj.itemPrice}.`
    } else if (i === cart.length - 1) {
      list += `, and ${obj.itemName} at $${obj.itemPrice}.`;
    } else if (i === 0) {
      list += `, you have ${obj.itemName} at $${obj.itemPrice}`;
    } else {
      list += `, ${obj.itemName} at $${obj.itemPrice}`;
    }
  }
  
  return `In your cart${list}`
}

function total() {
  var total = 0;
  
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    total += obj.itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    
    if (obj.itemName === item) {
      cart.splice(i, 1)
      return cart;
    }
  }
  
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  
  var result = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = [];
  return result;
}



