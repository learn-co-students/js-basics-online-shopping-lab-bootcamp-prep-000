var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
    itemName: item,
    itemPrice: Math.floor(1 + 100*Math.random())
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length===0) {
    return "Your shopping cart is empty.";
  } else {
    var cartResponse = "In your cart, you have ";
    for(var i=0; i<cart.length; i++) {
      cartResponse += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if(i<cart.length-1) {
        cartResponse += ", "; // still more to go
      }
      if(i===cart.length-2) {
        cartResponse += "and "; // only one more to go!
      } else if(i===cart.length-1) {
        cartResponse += "."; // we're done.
      }
    } // end for
    return cartResponse;
  }
}

function total() {
  var t = 0, i = 0;
  while(i<cart.length) {
    t += parseInt(cart[i].itemPrice);
    i++;
  }
  return t;
}

function removeFromCart(item) {
  var found = false, i = 0;
  while(!found && i<cart.length) {
    if(cart[i].itemName === item) {
      found = true;
    } else {
      i++;
    }
  }
  if(found) {
    cart = [...cart.slice(0,i), ...cart.slice(i+1)];
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var t = total();
    cart = [];  // why remove items when you can just delete it?
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
  }
}
