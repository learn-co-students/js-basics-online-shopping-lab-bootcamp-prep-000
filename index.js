var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var fullItem = { 
    itemName: item,
    itemPrice:  Math.floor(Math.random() * 100)
  }
  cart.push(fullItem)
  return `${fullItem.itemName} has been added to your cart.`
}

function viewCart() {
  var cartContents = [];
    for (var i = 0; i < cart.length; i++) 
    if (i === cart.length-1) {
    cartContents.push(`and ${fullItem.itemName[i]} at $${fullItem.itemPrice[i]}.`)
    }
    else {
    cartContents.push(`${fullItem.itemName[i]} at $${fullItem.itemPrice[i]}, `)
    }
    
    cartContents.push(`and ${fullItem.itemName[i]} at $${fullItem.itemPrice[i]}.`)
return `In your cart, you have ${cartContents}`
}

/*
function viewCart() {
  var cartContents = [];
    for (var i = 0; i < cart.length -1; i++) 
    cartContents.push(`${fullItem.itemName[i]} at $${fullItem.itemPrice[i]}, `)
    }
    i = cart.length - 1
    cartContents.push(`and ${fullItem.itemName[i]} at $${fullItem.itemPrice[i]}.`)
return `In your cart, you have ${cartContents}`
}

function viewCart() {
  i = i+1;
  do { console.log

var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
*/
