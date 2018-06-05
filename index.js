var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {
   itemName: item,
   itemPrice: Math.floor((Math.random() * 100) + 1)
 };
 
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var string = "In your cart, you have ";
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length - 1 && cart.length !== 1) {
      string += "and ";
    }
    
    string += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    
    if (i === cart.length - 1) {
      string += ".";
    } else {
      string += ", ";
    }
  }
  
  return string;
}

function total() {
  var totalPrice = 0;
  
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  
  return totalPrice;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  var totalPrice = total();
  cart = [];
  
  return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
}
