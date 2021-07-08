var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100 + 1)
 };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  var cartContents = "In your cart, you have ";
  var itemsArray = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    for(var i = 0; i < cart.length; i++) {
      itemsArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`); 
    } 
    if(cart.length > 1) {
      let lastItem = itemsArray.pop();
      cartContents += `${itemsArray.join(", ")}, and ${lastItem}`;
    } else {
      cartContents += itemsArray.join(", ");
    }
  }
  return cartContents + ".";
}


function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var itemObject;
  for(var i = 0; i < getCart().length; i++) {
    if(getCart()[i].itemName === item) {
      itemObject = getCart()[i];
    }
  }
  if(itemObject) {
      let indexOfItem = getCart().indexOf(itemObject);
      getCart().splice(indexOfItem, 1);
    } else {
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  var message = "Your total cost is ";
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    message += `$${total()}, which will be charged to the card ${cardNumber}.`;
    cart.splice(0);
    return message;
  }
}
