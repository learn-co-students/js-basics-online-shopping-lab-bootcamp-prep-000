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
 var price = Math.floor((Math.random() * 100) + 1);
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  
  var string = "In your cart, you have ";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }else if (cart.length === 1) {
    string += `${Object.keys(cart[0])} at $${parseInt(Object.values(cart[0]))}.`;
    
    console.log(string)
  }else if (cart.length === 2) {
    string += `${Object.keys(cart[0])} at $${parseInt(Object.values(cart[0]))} and ${Object.keys(cart[1])} at $${parseInt(Object.values(cart[1]))}.`;
    
    console.log(string);
  }else if (cart.length >= 3) {
    for (let i = 0; i < cart.length - 1; i++) {
      string += `${Object.keys(cart[i])} at $${parseInt(Object.values(cart[i]))}, `;
    }
    
    string += `and ${Object.keys(cart[cart.length - 1])} at $${parseInt(Object.values(cart[cart.length - 1]))}.`;
    
    console.log(string)
  }
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += parseInt(Object.values(cart[i]));
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  
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
  // write your code here
  
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  
  cart = [];
}





