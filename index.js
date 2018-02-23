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
  cart.push(newItem);
  
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var output = [];
  
  for (let i = 0; i < cart.length; i++) {
  	var keys = Object.keys(cart[i]);
  	
   if (cart.length === 1) {
      output = ` ${keys} at $${cart[i][keys]}`;
	  console.log(`error 1`)
  } else { 
      if (i === cart.length - 1) {
        output.push(` and ${keys} at $${cart[i][keys]}`);
      } else {
		  output.push(` ${keys} at $${cart[i][keys]}`);
      }
    }
  }
    
	if (cart.length !== 0) {
      return `In your cart, you have${output}.`;
    } else {
      return `Your shopping cart is empty.`
    }
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
