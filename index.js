var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = getRandom(1, 100)
 cart.push({ [itemName]: itemPrice })
 console.log(`${itemName} has been added to your cart.`)
 return cart;

 function getRandom (min, max) {
   return Math.floor(Math.random() * (max - min) + min);
 }
}

function viewCart() {
  // write your code here

  var n = cart.length, response = "";
  var respArray = [];


  if (n === 0) {
    response = "Your shopping cart is empty."
  } else {
    for (var i = 0; i < n; i++) {
      if (n > 1 && i === n - 1) {
        respArray.push(`and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
      } else {
        respArray.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
      }
    }
    var cartList;

    if (n === 1) {
      cartList = respArray;
    } else if (n === 2) {
      cartList = respArray.join(" ")
    } else {
      cartList = respArray.join(", ")
    }
    response = `In your cart, you have ${cartList}.`
  }
  return console.log(response);
}

function total() {
  // write your code here
  var cartTotal = 0;
  for (var i = 0, n = cart.length; i < n; i++) {
    cartTotal += cart[i][Object.keys(cart[i])];
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  var tracker = -1;
  for (var i = 0, n = cart.length; i < n; i++) {
    if (cart[i].hasOwnProperty(item)) {
        tracker=i;
    }
  }
  if (tracker === -1) {
    console.log("That item is not in your cart.");
  } else {
    cart.splice(tracker, 1);
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments.length === 0) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
