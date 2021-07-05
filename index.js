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
 var price = Math.floor(Math.random() * 10) + 1;
 var obj = {itemName:item, itemPrice:price};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    var msg = "In your cart, you have";
    for(var i = 0; i < cart.length; i++ ) {
      msg += ` ${cart[i].itemName} at \$${cart[i].itemPrice}`;
      if ( cart.length > 1 && i < cart.length-1) {
         msg += ","
      }
      if ( cart.length > 1 && i === cart.length-2) {
        msg += " and";
      }
      
    }
    return msg + ".";
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i <cart.length; i++) {
    if ( cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  else {
    var totalCost = total();
    cart.length = 0;
    return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
