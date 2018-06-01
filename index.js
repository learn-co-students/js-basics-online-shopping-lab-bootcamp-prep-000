var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  var price = Math.floor((Math.random() * 100 ) + 1);
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}




function viewCart() {
  var numItems = cart.length;
  var statement = "";
  switch(numItems) {
      case 0:
        return "Your shopping cart is empty.";
      case 1:
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      case 2:
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      default: 
        for(var i = 0; i < cart.length - 1; i++) { 
          statement += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
        }
    statement += `and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    return `In your cart, you have ${statement}.`;
  }
}



function total() {
  var total = 0;
  
  for(var i = 0, l = cart.length; i < l; i++) {
    for(var item in cart[i]) {
      total += cart[i].itemPrice;
    }
  }
  return total / 2;
}



function removeFromCart(item) {
  var found = false;
  
  for(var key in cart) {
    var foundItem = cart[key].itemName;
    if(item === foundItem) {
      found = true;
      cart.splice(key, 1);
      }
  }
  if(!found) {
    return "That item is not in your cart.";
  }
  return cart;
}



function placeOrder(cardNumber) {
  var newTotal = total();
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    for(var i = 0; i < cart.length; i++) {
      cart.shift();
    }
    return`Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`;
  }
}





