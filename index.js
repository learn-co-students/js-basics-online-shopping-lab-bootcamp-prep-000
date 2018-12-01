var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 });
  return `${item} has been added to your cart.`; 
}


function viewCart() {
  var array = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for(var i = 0; i < cart.length; i++) {
     if(cart.length === 1) {
       return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
     }
     else if(cart.length === 2) {
       return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}.`;
     }
     else if(cart.length >= 3) {
       return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}, and ${getCart()[i + 2].itemName} at $${getCart()[i + 2].itemPrice}.`;
     }
    } 
  }
}



function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}


 function removeFromCart(item) {
  var string = "";
  var unmatchedItem = true;
  for(var i = 0; i < cart.length; i++) {
  if(item === getCart()[i].itemName) {
    cart.splice(i, 1);
  }
  }
  if(unmatchedItem) {
    return"That item is not in your cart.";
  }
  return cart;
   }



function placeOrder(cardNumber) {
  const cartTotal = total();
  
  if(arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
