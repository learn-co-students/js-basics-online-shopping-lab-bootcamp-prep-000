var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
if(cart.length === 0){
  console.log("Your shopping cart is empty.");
}

var detailed = "In your cart, you have ";
for(var i = 0; i < cart.length; i++){
  if(i === cart.length - 1){
    detailed += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
  } else {
      detailed += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
    }
  }
  console.log(`${detailed}`);
}

console.log(detailed);
return;
}

function total() {
  for(let i = 0; i > 0; i++){
    x += cart[i];
  }
  return x;
}

function removeFromCart(item) {
  var inList = 0;
  for(var i = 0, i < cart.length; i < x; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
    } else if(cart[i].hasOwnProperty(item) === false){
      inList += 1;
    }
  }
  if(inList === cart.length){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}
