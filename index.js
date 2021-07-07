var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item] : Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log ("Your shopping cart is empty.");
  }
  else if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }
  else if (cart.length === 2){
     console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  }
  else{
    var printOut = "In your cart, you have ";
    for(let i = 0; i < cart.length; i++){
      if (i === cart.length -1){
        printOut += `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
      }
      else {
        printOut += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
      }
    }
  }
  console.log(printOut);
}

function total() {
  var total = 0;
  for(let i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry we don't have a credit card on file for you.")
  }
  else{
    var final = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    console.log(final);
  }
placeOrder();
