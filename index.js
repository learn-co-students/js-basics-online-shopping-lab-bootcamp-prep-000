var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random()*100+1);
 var newItem = {[itemName]: itemPrice};
 var cartSize = cart.length;
 cart[cartSize] = newItem;
 console.log(itemName + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ".");
  } else if (cart.length === 2 ) {
    console.log("In your cart, you have " + Object.keys(cart[0])[0]  + " at $" + cart[0][Object.keys(cart[0])[0]]  + " and " + Object.keys(cart[1])[0]  + " at $" + cart[1][Object.keys(cart[1])[0]]  + ".");
  } else if (cart.length ===3 ){
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ", " + Object.keys(cart[1])[0] + ` at $${cart[1][Object.keys(cart[1])[0]]}, and ${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}.`);
  } else {
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ", " + Object.keys(cart[1])[0] + ` at $${cart[1][Object.keys(cart[1])[0]]}, ${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}, and ${Object.keys(cart[3])[0]} at $${cart[3][Object.keys(cart[3])[0]]}.`);
  }
}

function total() {
  var cartLength = cart.length;
  var sum = 0;
  for (var i = 0; i<cartLength; i++) {
    sum += cart[i][Object.keys(cart[i])[0]]
  }
  return sum;
}

function removeFromCart(item) {
  var cartLength = cart.length;
  for (var i = 0; i<cartLength; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return cart;
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
    return cart;
  }
}
