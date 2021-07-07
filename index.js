var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 cart.push({ itemName: item, itemPrice: Math.floor((99*Math.random()+1))});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0) {
    return 'Your shopping cart is empty.';
  }
  else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }  
   else {
    var message=`In your cart, you have `;
    for (var i=0; i<(cart.length-1); i++) {
      message+=`${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    message+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    return message;
  }
}

function total() {
  var totalCost=0;
  for (var i=0; i<cart.length; i++) {
    totalCost+=cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  var i=0;
  var itemFound=false;
  while ((i<(cart.length)) && !itemFound)
    {
    if (cart[i].itemName===item) {
      itemFound=true;
      cart.splice(i,1);
    }
    i++;
  } 
  if (!itemFound) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (arguments.length===0) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else {
    var totalCost=total();
    cart=[];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}

