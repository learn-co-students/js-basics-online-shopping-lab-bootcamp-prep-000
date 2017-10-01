var cart = [];

// Helper functions

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// Functions for lab

// Add item to cart with a randomly generated price
function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

// Loop over cart, printing out contents per formatting guidelines
function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var formattedCart = [];
    for (let i = 0; i < cart.length; i++) {
      var currentItem = Object.keys(cart[i]);
      var currentPrice = cart[i][currentItem];
      formattedCart.push(` ${currentItem} at $${currentPrice}`);
    }
      if (cart.length == 1) {
        console.log(`In your cart, you have${formattedCart[0]}.`);
      }
      else if (cart.length == 2) {
        console.log(`In your cart, you have${formattedCart[0]} and${formattedCart[1]}.`);
      }
      else {
        formattedCart[formattedCart.length - 1] = ` and${formattedCart[formattedCart.length -1]}`
        console.log(`In your cart, you have${formattedCart}.`)
        }
      }
  }

// Iterates through cart, returning total value
function total() {
  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    var currentItem = Object.keys(cart[i]);
    var currentPrice = cart[i][currentItem];
    totalPrice += currentPrice;
  }
return totalPrice;
}


function removeFromCart(item) {
for (let i = 0; i < cart.length; i++) {
  var currentItemKey = Object.keys(cart[i]);

  if (currentItemKey == item) {
    cart.splice(i, 1);
    return cart;
  }
}
console.log("That item is not in your cart.");
return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
