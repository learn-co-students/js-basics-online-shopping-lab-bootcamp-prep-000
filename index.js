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
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var newItem = {[item] : itemPrice};
 
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem)

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(printTwoItems)
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(printThreeOrMoreItems)
  }
}

function total() {
  // write your code here
  var total = 0;
  
  for(var x = 0; x < cart.length; x++){
    for(var items in cart[x]){
      total += parseInt(cart[x][items]);
    }
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here

  for(var x = 0; x < cart.length; x++){
    if(cart[x].hasOwnProperty(item)){
       cart = [...cart.slice(0, x), ...cart.slice(x + 1)];
      
       return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber !== undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = cart.slice(cart.length);
  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
