var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  var newObject = new Object();
  newObject.itemName = `${item}`;
  newObject.itemPrice = Math.floor(Math.random() * 100);
  cart.push(newObject);
  return `${item} has been added to your cart.`;
}




function viewCart() {
  var output = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && cart.length > 1) {
        output += "and "
      }
      output += (`${cart[i].itemName} at \$${cart[i].itemPrice}`);
      if (i !== cart.length - 1) {
        output += ", ";
      }
    }
      
  }
  return "In your cart, you have " + output + "."
}






function total() {
  var total = 0;
  
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(`${cart[i].itemPrice}`)
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var cost = total();
  cart = [];
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}
