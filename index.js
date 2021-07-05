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
var itemName = item;
var itemPrice = Math.floor(Math.random()*100);
cart.push({[itemName]: itemPrice});
console.log(`${itemName} has been added to your cart.`);
return cart
}

function viewCart() {
  // write your code here
  var newArray=[];
  var string= "In your cart, you have"
  if(cart.length === 1){
    console.log(`${string} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }else if (cart.length === 2){
    console.log(`${string} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  }else if (cart.length < 1){
    console.log(`Your shopping cart is empty.`)
  }else if (cart.length >= 3){
    for(var i=1; i< cart.length - 1; i++){
      newArray.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
    } console.log(`${string} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]},${newArray}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i<cart.length; i++){
     sum += cart[i][Object.keys(cart[i])];
     
  }return sum
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
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
    return cart;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
  return cart;
}
