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
 function getRandInt(max, min){
   return Math.floor(Math.random() * (max - min)) + min;
 }
 var newObject = {
   "itemName": item,
   "itemPrice": getRandInt(100, 1)
 };
 cart.push(newObject);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here cart[i].itemName and cart[i].itemPrice
  if(cart.length === 0){
    return ("Your shopping cart is empty.");
  } else if(cart.length === 1) {
    var one = `In your cart, you have ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}.`
    return one;
  } else if(cart.length === 2) {
    var two = `In your cart, you have ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}, and ${Object.values(cart[1])[0]} at $${Object.values(cart[1])[1]}.`
    return two;
  } else {
    var cart2 = []
    for(var i = 0; i < cart.length - 1; i++){
      cart2.push(`${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}`)
    }
    var threeplus = `In your cart, you have ${cart2.join(', ')}, and ${Object.values(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[1]}.`
    return threeplus;
  }
}


function total() {
  // write your code here
  let x = 0
  var prices = [];
  var total = 0;
  while( x < cart.length){
    prices.push(cart[x][Object.keys(cart[x])[1]])
    x++;
  }
  for(var a in prices){
    total += prices[a];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(Object.values(cart[i])[0] === item){
      cart.splice([i], 1);
      return cart
      }
    }
  return("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totally = total();
    for(var i = 0; i < cart.length; i++){
      cart.pop();
    }
    return `Your total cost is $${totally}, which will be charged to the card ${cardNumber}.`
  }
}
