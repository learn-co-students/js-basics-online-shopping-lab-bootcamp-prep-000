var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100);
  cart.push({[itemName]: itemPrice});
  console.log(`${itemName} has been added to your cart.`);
//  console.log(cart);
  return cart;
}

function viewCart() {
  console.log(`this is my cart:`);
  console.log(cart);
  if(cart.length > 0){
    var content = `In your cart, you have`;
    if(cart.length === 1){
      content += ` ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`;
    }
    // Trenger en ekstra if for å skille mellom to og flere enheter i handlevogn...
    else {
      for(var i in cart){
        if(i < cart.length - 1){
          content += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`;
        }
        else {
          content += ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
        }
      }
    }
    console.log(content);
  }
  else {
    console.log(`Your shopping cart is empty.`)
  }
}

function total() {
  let totalSum = 0;
  for(let i = 0; i < cart.length; i++){
    totalSum += parseInt(Object.values(cart[i]));
  }
  return totalSum;
}

function removeFromCart(item) {
  if(cart.hasOwnProperty(item)){
    delete cart.item;
  }
  else {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  return cart;
}

// ||||||   Test addToCart - OK!   ||||||
// console.log("viewCart - tom kurv:")
// viewCart();
// console.log("viewCart - en ting i kurven:")
addToCart("ice cream");
// viewCart();
addToCart("chocolate pudding");
// addToCart("mango sorbet"); //
// console.log("viewCart - vanlig kurv:")
// viewCart();

// ||||||   Test viewCart    ||||||
// viewCart();

// ||||||   Test total    ||||||
// console.log(`Test total(): ${total()}`);

// ||||||   Test placeOrder    ||||||

// console.log(placeOrder(12345567890));
console.log(placeOrder());