var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 99) + 2
 };
 cart.push(object);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var array = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      if(cart.length === 1) {
    array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    return `In your cart, you have ${array}.`;
     }
     else if(cart.length === 2) {
       array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}`);
       return `In your cart, you have ${array}.`;
     }
     else {
      array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, ${getCart()[i + 1].itemName} at $${getCart()[i + 1].itemPrice}, and ${getCart()[i + 2].itemName} at $${getCart()[i + 2].itemPrice}`);
       return `In your cart, you have ${array}.`; 
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
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}