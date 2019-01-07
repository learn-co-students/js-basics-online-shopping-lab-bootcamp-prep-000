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
 var newObj = {};
 newObj[item] = Math.floor(Math.random() * 100) + 1;
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var newArray = [];
  for (var i = 0; i < cart.length; i++) {
    newArray.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
  }
    if (!newArray.length) {
      console.log("Your shopping cart is empty.");
    }else if (newArray.length === 1) {
    console.log(`In your cart, you have ${newArray[0]}.`);
  }else if (newArray.length === 2) {
    console.log(`In your cart, you have ${newArray[0]} and ${newArray[1]}.`);
  }else if (newArray.length >= 3) {
    var addAnd = newArray.splice(-1);
    newArray.push(`and ${addAnd}`);
    console.log(`In your cart, you have ${newArray.join(", ")}.`);
  }
}

function total() {
  // write your code here
  var totalAmount = 0;
  for (var i = 0; i < cart.length; i++) {
    totalAmount += cart[i][Object.keys(cart[i])];
  }
  return totalAmount;
}

function removeFromCart(item) {
  // write your code here
  for (var i =0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0);
    return cart;
  }
}
