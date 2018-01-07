var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 /*    var itemName = item;
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var newObject = {"itemName": itemPrice};
 cart.push(newObject)
 return `${item} has been added to your cart.`;
 */
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var itemObj = {[item]: itemPrice};
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var cartItems = []
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if(cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if(cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    for(var i = 0; i < cart.length - 1; i++) {
      cartItems.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
    }
     console.log(`In your cart, you have ${cartItems.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
  } 
}
function total() {
  var sum = 0 
  var i = 0 
  while (i < cart.length) {
    sum += Number(Object.values(cart[i]))
    i++
  }
  return sum 
}

function removeFromCart(item) {
  var isItemInCart = false;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  if(!isItemInCart) {
    console.log("That item is not in your cart.");
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
 cart = [];
}
