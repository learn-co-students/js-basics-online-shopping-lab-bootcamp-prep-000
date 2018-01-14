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
var test= new Object();
test[item]=Math.floor(Math.random()*100);
cart.push(test);
console.log(`${item} has been added to your cart.`);
return cart
}

function viewCart() {
  // write your code here
  var string1 ="In your cart, you have ";
    console.log(string1);
  if(cart.length==0){console.log("Your shopping cart is empty.")};

  for(let i=cart.length;i>0;i--){
    string1+=`${Object.keys(cart)[cart.length-i]} at $${cart[cart.length-i][Object.keys(cart)[cart.length-i]]}`
  }
}

function total() {
  // write your code here

  var total=0;
  for(let i=cart.length;i>0;i--){
    total+=parseInt(Object.values(cart)[cart.length-i]);
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
