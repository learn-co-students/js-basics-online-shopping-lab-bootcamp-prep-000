var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: item,
   itemPrice: price,
 });
 return `${item} has been added to your cart.`;
}


function viewCart() {
if (cart.length === 0) {
  return "Your shopping cart is empty.";
} else if (cart.length === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
} else if (cart.length === 2) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
} else {
  var itemNameAndPrice = [];

  for (var i = 0; i < cart.length-1; i++) {
    itemNameAndPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
 }
 
} return `In your cart, you have ${itemNameAndPrice.join(", ")}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
}


function total() {
  var priceArray = [];
  var total = 0;
  for (var p = 0; p < cart.length; p++) {
    priceArray.push(cart[p].itemPrice) ;
  } 
  for (var i = 0; i < priceArray.length; i++) {
    total += priceArray[i];
  }
  return total;
}

function removeFromCart(item) {
 for (var r = 0; r < cart.length; r++)  {
    if (cart[r].itemName===item)  {
      cart.splice(r, 1);
      return cart;
  }  
  } return "That item is not in your cart.";
  } 
  

function placeOrder(cardNumber) {
  var totalOrder = total();
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart.splice(0);
    return `Your total cost is $${totalOrder}, which will be charged to the card ${cardNumber}.`;
  }
}
