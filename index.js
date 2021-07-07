var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var item = {
    itemName: itemName,
    itemPrice: Math.floor(Math.random() * 100)
  };
  
  cart.push(item);
  
  return `${item.itemName} has been added to your cart.`; 
   
}

function viewCart() {
  
  if (cart.length===0) {
    return "Your shopping cart is empty.";
  }
  
  var message = "In your cart, you have ";
  
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var name = item.itemName;
    var price = item.itemPrice;
    
    if (i == cart.length - 1) {
      if (cart.length === 1) {
         message += `${name} at $${price}.`;
      } else {
         message += `and ${name} at $${price}.`;
      }
    } else {
      message += `${name} at $${price}, `;
    }
  }
  
  return message;
}


function total() {
  var value = 0;
 for (var i = 0; i < cart.length; i++) {
   var item = cart[i];
   value += item.itemPrice;
  }  
    return value;
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {

    var currentItem = cart[i];
    if (currentItem.itemName == item) {
      cart.splice(i, 1);
      return "ok";
    }
  }
  
  return "That item is not in your cart.";
}





function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}







