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
 let object = {
   [item]: Math.floor(Math.random() * 100)
 }
 cart.push(object);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  let word = "In your cart, you have";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    let key = Object.keys(cart[0])[0];
    word += ` ${key} at $${cart[0][key]}.`;
    console.log(word);
  } else if (cart.length === 2) {
    for (let i = 0; i < cart.length; i++) {
      let key = Object.keys(cart[i])[0];
      if (i != cart.length - 1) {
        word += ` ${key} at $${cart[i][key]}`;
      } else {
        word += ` and ${key} at $${cart[i][key]}.`;
      }
      console.log(word);
    }
  } else {
    for (let i = 0; i < cart.length; i++) {
      let key = Object.keys(cart[i])[0];
      if (i != cart.length - 1) {
        word += ` ${key} at $${cart[i][key]},`;
      } else {
        word += ` and ${key} at $${cart[i][key]}.`;
      }
      console.log(word);
    }
  }
}

function total() {
  // write your code here
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    let curr = cart[i];
    let key = Object.keys(curr)[0];
    sum += curr[key];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    let object = cart[i];
    if (object.hasOwnProperty(item)) {
      return cart.splice(i, 1);
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
