var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var price = (Math.floor(Math.random() * 100));
    var items = Object.assign({[item]: price} );
    cart.push(items);
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
  var items = []; 
  var last; 
  
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  
  ( (cart.length === 1) ? console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`) : console.log('Test again.') );
  
  ( (cart.length === 2) ? console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`) : console.log("Try again.") );
  
  if (cart.length >= 3) {
    for (var i = 0; i < cart.length; i++) {
      items.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    }
    last = items.pop();
    console.log(`In your cart, you have ${items.join(", ")}, and ${last}.`);
  }
  
}

function total() {
  var totalSum;
  var itemCost = []; 
  for (var i = 0; i < cart.length; i++) {
    itemCost.push(`${Object.values(cart[i])}`); 
  }
  
  totalSum = itemCost.reduce( (a,b) => parseInt(a) + parseInt(b) );
  return totalSum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
     if (cart[i].hasOwnProperty(item)) {
       cart.splice(i, 1);
       return cart;
     }
   } 
   
   if (!cart.hasOwnProperty(item)) {
     console.log("That item is not in your cart.");
     return cart;
   }
   
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []; 
  }
}
