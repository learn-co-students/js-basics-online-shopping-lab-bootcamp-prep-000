var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//Use the string to create a new object representing the item, it should consist of
//one key value pair, which is the item's name and the value is a randomly generated price
//The price should be between 1 - 100
//After adding an item the function should print "<itemname> has been added to your cart."
//And then return the updated cart
function addToCart(item) {
 // write your code here
  cart.push({[item]: + Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

//Write a function that prints out all contents in one long coherent statement
function viewCart() {
  // write your code here
  if(cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  } else if(cart.length === 0){
    return console.log(`Your shopping cart is empty.`);
  } else if(cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  } else {
    var view = `In your cart, you have `
    for(var i = 0; i < cart.length - 1; i++) {
    view += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `;
    }
    view += `and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`;
    console.log(view);
  }
}

//Write a function that iterates through the cart array and returns the current total value
function total() {
  // write your code here
  var totalValue = 0;
  for(var i = 0; i < cart.length; i++) {
    totalValue = totalValue + Math.floor(Object.values(cart[i]));
  }
  return totalValue;
}

//This function accepts one argument, the name of the item to be removed. If the cart does not contain
//a matching value it should print out "That item is not in your cart" and return the unchanged cart
//If the item is present the function should remove the object from the cart and return the updated cart
function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

//Write a function that accepts one argument: a credit card number. If no argument is receieved the function
//should print out "Sorry we don't have a credit card on file for you". Otherwise if it is received it should
//print the total cost, and then empty the cart array
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}
