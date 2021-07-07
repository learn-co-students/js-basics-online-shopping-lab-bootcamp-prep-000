var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newObj = {itemName: [item], itemPrice: price};
  cart.push(newObj);
  var message = `${item} has been added to your cart.`
  return message;
}


function viewCart() {
var cartItem = 0;
var message = 'Your shopping cart is empty'
for (let cartItem = 0; cartItem < cart.length; cartItem++) {
  if (cartItem === 0) {
    message = `In your cart, you have ${cart[cartItem].itemName} at $${cart[cartItem].itemPrice}`;
  } else if (cartItem < cart.length - 1) {
    message = `${message}, ${cart[cartItem].itemName} at $${cart[cartItem].itemPrice}`;
  } else {
    message = `${message}, and ${cart[cartItem].itemName} at $${cart[cartItem].itemPrice}`
  }
 } 
 message = `${message}.`;
 return message;
}



function total() {
var total = 0;
cart.forEach(function(price) {
  total += price.itemPrice;
})
return total;
}

function removeFromCart(item) {
 var found = false;
 var message = "That item is not in your cart.";
  for (var cartIndex = 0; cartIndex < cart.length; cartIndex++) {
    if (cart[cartIndex].itemName == item) {
      cart.splice(cartIndex,1);
      found = true;
      break;
    }
  }
  if (!found){
    console.log(message);
  }
  return found ? cart : message;
 }


function placeOrder(cardNumber) {
  var cost = total()
  var message = 'Sorry, we don\'t have a credit card on file for you.'
  for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
    if (cardNumber === undefined) {
    } else {
      cart.length = 0;
      message = `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
    }
  } 
  return message
}
