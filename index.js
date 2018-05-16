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
 
 var price = Math.floor(Math.random() * 100) + 1;
 var cartItem = {
   itemName: `${item}`,
   itemPrice: price
 };
 
 cart.push(cartItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  var message = "";
  var itemCount = getCart().length;
  
  if(itemCount === 0) {
    message = "Your shopping cart is empty.";
  } else {
    message = "In your cart, you have ";
    
    for(var i = 0; i < itemCount; i++) {
      if (i === 0) {
        message = message + cart[i].itemName + " at $" + cart[i].itemPrice;
      } else if(i === 1 && itemCount === 2) {
        message = message + ", and " + cart[i].itemName + " at $" + cart[i].itemPrice;
        } else if(i < itemCount-1 && itemCount > 2) {
          message = message + ", " + cart[i].itemName + " at $" + cart[i].itemPrice;
          } else if(i === itemCount-1) {
              message = message + ", and " + cart[i].itemName + " at $" + cart[i].itemPrice;
            }
    }
    message += ".";
  }
  return message;
}

function total() {
  // write your code here
  
  var total = 0;
  var itemCount = getCart().length;
  
  for(var i = 0; i < itemCount; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  
  var itemCount = getCart().length;

  for(var i = 0; i < itemCount; i++) {
    if(item == cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  
  var cost = total();
  
  if(cardNumber !== undefined) {
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
