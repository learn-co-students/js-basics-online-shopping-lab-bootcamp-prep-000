var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 cart.push({ [itemName]: itemPrice });
 console.log(itemName + " has been added to your cart.")
 return cart
}
function viewCart() {
  var cartString = "";
  if (cart.length > 2) {
    for (let i = 0; i < cart.length - 1; ++i) {
      cartString = cartString + " " + Object.keys(cart[i]) + " at $" + Object.values(cart[i]) + ",";
    }
    cartString = cartString + " and " + Object.keys(cart[cart.length - 1]) + " at $" + Object.values(cart[cart.length - 1]);
    console.log("In your cart, you have" + cartString + ".");
  } else if (cart.length > 1) {
    for (let i = 0; i < cart.length - 1; ++i) {
      cartString = cartString + " " + Object.keys(cart[i]) + " at $" + Object.values(cart[i]);
    }
    cartString = cartString + " and " + Object.keys(cart[cart.length - 1]) + " at $" + Object.values(cart[cart.length - 1]);
    console.log("In your cart, you have" + cartString + ".");
  } else if (cart.length > 0) {
    cartString = " " + Object.keys(cart[0]) + " at $" + Object.values(cart[0])
    console.log("In your cart, you have" + cartString + ".");
    
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var totalInt = 0
  for (let i = 0; i < cart.length; ++i) {
     totalInt = totalInt + parseInt(Object.values(cart[i]));
  }
  return totalInt
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
        cart.splice(i, 1)
        return cart
    }
}
console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
    cart = []
  }
}

