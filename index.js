var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// looked at solution


function addToCart(passedInItemNameString) {
  var item = { itemName: passedInItemNameString , itemPrice: Math.floor(Math.random() * 100)+1}
  cart.push(item)
  return `${passedInItemNameString} has been added to your cart.`
  // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }

  //First Objective
  //In your cart, you have lemons at $65.
  //Second Objective
  //In your cart, you have mango at $16, and nuts at $29.
  //Third Objective
  //In your cart, you have orange at $7, pear at $51, and quince at $79.
  for(let i = 0; i < cart.length; i++) {
    
  }
} 
  // write your code here




function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
