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
  cart.push({ [item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;

  
  
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your cart is empty");
  }
  var string = "In your cart you have ";
  if (cart.length === 1) {
    string += `${Object.keys(cart[0]) } at $${cart[0]
    [Object.keys(cart[0])]}.`;
  } else if (cart.length === 2) {
    string += `${Object.keys(cart[0]) } at $${cart[0]
    [Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i=0; i<cart.length; i++) {
      var text; 
      if (i === cart.length - 2) {
        text = ", and ";
      } else if (i === cart.length - 1) {
        text = "";
      } else {
        text = ", ";
      }
      string += `${Object.keys(cart[i])} at $${cart[i]
      [Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }
  
  return console.log(string);
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
