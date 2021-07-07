//ecofresi

//Define cart variable for empty array
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
//----------------------------------------
//--------
//cfunction accepts one argument, the name
//of an item.
//create a new object representing the item
//The object should consist of one keys
//-value pair which is the price of each
//item should be a randomly-generated
//integer between 1 and 100.

function addToCart(item) {
// write your code here
 cart.push({[item]: Math.floor(Math.random()*100)});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

//viewCart function - loop over every item in your cart, printing out the contents 

function viewCart() {

// write your code here
  
//console.log("Cart Length is " + cart
//.length);
  
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  }
  
  var string = "In your cart, you have ";
  
  for (var i=0; i < cart.length; i++) {
  
  if (cart.length === 1) {
    
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    return console.log(string);
    
  } else if (cart.length === 2) {
    
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
    return console.log(string);
  
  } else {
  
      var text;
      
      console.log("i is " + i + "Cart Iten is " + `${Object.keys(cart[i])}`);
      
      if (i === cart.length - 2){
          text = ", and ";
      } else if (i === cart.length - 1) {
          text = "";
      } else {
          text = ", ";
      }
      string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }
  
  return console.log(string);
}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (cardNumber === undefined) {
    
    return console.log("Sorry, we don't have a credit card on file for you.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
  return
}