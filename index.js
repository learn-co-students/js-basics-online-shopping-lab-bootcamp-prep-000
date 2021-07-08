var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


 ///////////////////////////create an Objects array.

function addToCart(item) {
  var newItem = {};  // this object contains the item name and price.

  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100)
  }
  //newItem.itemName = item;
 //newItem.itemPrice = Math.floor(Math.random()*100)
 cart.push(newItem); // it was pop(newItem)
 return `${newItem.itemName} has been added to your cart.`
}


/////////////////////////////////////////////////////////// convert array itmes/object into a string with the required format.

function viewCart() {

  if (cart.length === 0) {
    return "Your shopping cart is empty."

  } else if (cart.length === 1) {
    return "In your cart, you have " + `${cart[0].itemName} at $${cart[0].itemPrice}.`;

  } else if (cart.length === 2){
    return "In your cart, you have " + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;

  } else {
    var allItemsPriceToView = "In your cart, you have";
    for (var i=0; i < cart.length-1; i++) {
      allItemsPriceToView += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  }
  return allItemsPriceToView.concat(` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`) ;

}

///////////////////////////////////////////// add up the price in cart.
function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    totalValue += cart[i].itemPrice
  }
  return totalValue;
}

/////////////////////////////////////////// build a loop to find the item in the array, then remove it from array.
function removeFromCart(item) {
  for (var i=0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

//////////////////////////////////////////

function placeOrder(cardNumber) {
  if (cardNumber === 0 || cardNumber === null) {
    return "Sorry, we don't have a credit card on file for you."
  } else if (total() === 0) {
     return "Sorry, we don't have a credit card on file for you."

  } else {
    var totalvalue;
    totalvalue = total();
    cart.splice(0, cart.length); //cart = []; do not use slice, which is nodesctructive.
    return `Your total cost is $${totalvalue}, which will be charged to the card ${cardNumber}.`
  }

}
