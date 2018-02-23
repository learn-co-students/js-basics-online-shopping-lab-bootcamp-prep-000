var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  
  var newItem = { [item] : itemPrice };
  cart[item].push(itemPrice);
  //Object.assign(cart, { [item] : itemPrice })
  
  console.log(`${item} has been added to your cart.`);
  console.log(cart);
  return cart;
}

function viewCart() {
  var output = []
  
  for (let i = 0; i < cart.length; i++) {
  	var keys = Object.keys(cart[i]);
	  console.log(`cart = ${keys}`);
	  console.log(`value = ${cart[i][keys]}`);
  }
    
    
    // "i at i, i+ at i+, and i++ at i++.
    
    console.log(cart);
    if (length !== 0) {
      return `In your cart, you have ${output}.`;
  } return `Your shopping cart is empty.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
