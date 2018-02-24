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
  
  cart.push({ [item] : itemPrice });
  
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var output = [];
  
  for (let i = 0; i < cart.length; i++) {
  	var keys = Object.keys(cart[i]);
  	
   if (cart.length === 1) {
      output = ` ${keys} at $${cart[i][keys]}`;
   } else {
     if (i === cart.length - 1 && cart.length < 3) {
       output = `${output} and ${keys} at $${cart[i][keys]}`;
     } else if (i === cart.length -1) {
       output.push(` and ${keys} at $${cart[i][keys]}`);
     } else {
       output.push(` ${keys} at $${cart[i][keys]}`);
     }
   }
  }
  
  if (cart.length !== 0) {
    console.log(`In your cart, you have${output}.`);
  } else {
    console.log(`Your shopping cart is empty.`);
  }
}

function total() {
  var total = 0;
  
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i][ Object.keys(cart[i]) ];
  } return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) ) {
      cart = [...cart.slice(0, i), ...cart.slice(i+1)];
      return cart;
    } 
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  if (!cardNumber || !Number.isInteger(cardNumber)) {
    //Checking to see if the argument is an integer is not required, but the function felt incomplete without it. Otherwise I could pay with anything and revive the barter system.
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else if (Number.isInteger(cardNumber)) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}