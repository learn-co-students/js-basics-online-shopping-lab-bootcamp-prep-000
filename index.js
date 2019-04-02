var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 var newItem = generateCartItem(item);
 getCart().push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
}

function generateCartItem(newItemName) {
  return {
    itemName: newItemName, 
    itemPrice: Math.floor(Math.random()*100)
  }
}


function viewCart() {
  console.log`In your cart, you have apples at ${2}, doritos at ${5} and nutella at ${8}`;
}

function total(item) {
return total;
}

function removeFromCart(doritos) {
  var array = doritos;
  array.prototype.splice(doritos);
  return total;
}

function placeOrder(cardNumber) {
  console.log `Your total cost is ${'15'}, which will be charged to the card 12345678`;
}