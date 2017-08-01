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
 var value = Math.random()*100;
 var newObj = {[item]: Math.floor(value)+1};
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var keys = Object.keys(cart);
  console.log(keys.length);
  if(keys.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (keys.length === 1) {
    console.log(`In your cart, you have ${keys} at $${cart[keys]}.`);
  } else if (keys.length === 2){
    console.log(`In your cart, you have ${keys[0]} at $${cart[keys[0]]} and ${keys[1]} at $${cart[keys[1]]}.`);
  }
  else {
    var string = "In your cart, you have ";
    for (var i = 0; i < keys.length -1; i++) {
      string = string + `${keys[i]} at $${cart[keys[i]]}, `
      // console.log(string);
    }
    console.log(string + `and ${keys[keys.length-1]} at $${cart[keys[keys.length-1]]}.`)
  }
}

function total() {
  // write your code here
  var money = 0;
  for (var item in cart) {
    money = money + cart[item];
  }
  return money;
}

function removeFromCart(item) {
  // write your code here
  if(cart.hasOwnProperty(item)) {
      delete cart[item];
      return cart;
  }
  else {
    console.log("That item is not in your cart.");
    return cart;
  }
  // return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  cart = [];
  return cart;
}
