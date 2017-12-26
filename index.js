var cart = [{apples: 30}, {bananas: 20}, {meat: 40}, {broccoli: 50}];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random()*99);
 cart.push({[item]: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var response = "In your cart, you have";
  var emptyArray = [];
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else if (cart.length === 1) {
      for (let i = 0; i < cart.length; i++) {
        console.log(`${response} ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
      }  
    } else if (cart.length === 2) {
      for (let i = 0; i < cart.length; i++) {
        emptyArray.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
      }
      console.log(`${response} ${emptyArray[0]} and ${emptyArray[1]}.`);
    } else if (cart.length >= 3) {
      for (let i = 0; i < cart.length - 1; i++) {
        emptyArray.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
      }
      emptyArray.join();
      console.log(`In your cart, you have${emptyArray}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
    }
    
  }




function total() {
  let array = [];
  let totalArray = [];
  for (let i = 0; i < cart.length; i++) {
    array.push(Object.values(cart[i]));
  }
  for (let i = 0; i < array.length; i++) {
    totalArray.push(array[i][0]);
  }
  let total = totalArray.reduce((a, b) => a + b);
  return total;
} 

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}