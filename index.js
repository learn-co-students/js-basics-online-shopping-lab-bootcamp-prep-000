var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPair = new Object({});
 var itemName = item;
 var itemPrice = (Math.floor((Math.random() * 100) + 1));
 
 itemPair[item] = itemPrice;
 
 cart.push(itemPair);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
   var listOfContents = `In your cart, you have ` + Object.keys(cart[0]) + ` at $` + Object.values(cart[0]);
   
  var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPair = new Object({});
 var itemName = item;
 var itemPrice = (Math.floor((Math.random() * 100) + 1));
 
 itemPair[item] = itemPrice;
 
 cart.push(itemPair);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
   var listOfContents = `In your cart, you have ` + Object.keys(cart[0]) + ` at $` + Object.values(cart[0]);
  if (cart) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
        listOfContents = `${listOfContents}` + `.`;
        console.log(listOfContents);
    }
  else if (cart.length === 2) {
      listOfContents = `${listOfContents}` + ` and ` + Object.keys(cart[1]) + ` at $` + Object.values(cart[1]) + `.`;
      console.log(listOfContents);
    }
  else {
      for (var i = 1; i < cart.length - 1; i++) {
        listOfContents += Object.keys(cart[i]) + " at $" + Object.values(cart[i]) + ", ";
      }
      listOfContents = `${listOfContents}` + ` and ` + Object.keys(cart[-1]) + ` at $` + Object.values(cart[-1]) + `.`;
      console.log(listOfContents);
    }
  } 
 
  
function total() {
var prices = [];
  for (var i = 0; i < cart.length; i++) {
    prices.push(Object.values(cart[i]));
  }
  for(var k = 0; k <cart.length; k++) {
    
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
