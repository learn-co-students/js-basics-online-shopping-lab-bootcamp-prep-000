var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(100*(Math.random()));
  var itemCart = {[item]: itemPrice};
  cart.push(itemCart);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
    var plusThreeItems = [];
    if(cart.length === 0){
      console.log("Your shopping cart is empty.");
    } else if(cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
    } else if(cart.length === 2){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
    } else {
      for(let i=0; i < cart.length-1; i++) {
        plusThreeItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
          }
          console.log(`In your cart, you have${plusThreeItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)
  }
         
}


function total() {
  var cartValue = 0;
  for (var i=0; i<cart.length; i++) {
    cartValue += cart[i][Object.keys(cart[i])];
}
return cartValue;
}

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  console.log('That item is not in your cart.')
  return cart
 
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
     console.log("Sorry, we don't have a credit card on file for you.")
  } 
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}

  