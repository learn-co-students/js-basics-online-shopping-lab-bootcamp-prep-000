var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 function getItemPrice(){
   return Math.floor(Math.random() * 100) + 1;
 }
 var itemPrice = getItemPrice();
 var itemName = item;
 cart.push({[itemName]: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cartItems = '';
  var cartNames = [];
  var cartPrices = [];
  for(let i=0; i<cart.length; i++){
    cartNames.push(Object.keys(cart[i]))
    cartPrices.push(cart[i][Object.keys(cart[i])])
  }

  if(cart.length > 2){
      // for(let i=0; i<cart.length; i++){
      //   cartItems += ` ${cartNames[i][0]} at $${cartPrices[i][0]}${i<=cart.length-2?'':','} ${i===cart.length-2?'and':''}`
      // }
      for(let i=0; i<cart.length; i++){
        cartItems += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}${i<=cart.length-2?',':''}${i===cart.length-2?' and':''}`
      }
    console.log(`In your cart, you have${cartItems}.`)
  }
  else if (cart.length === 2) {
      // for(let i=0; i<cart.length; i++){
      //   cartItems += ` ${cartNames[i][0]} at $${cartPrices[i][0]} ${i===cart.length-1?'':'and'}`
      // }
      for(let i=0; i<cart.length; i++){
        cartItems += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}${i===cart.length-1?'':' and'}`
      }
    console.log(`In your cart, you have${cartItems}.`)
  }
  else if (cart.length === 1) {
    // console.log(`In your cart, you have ${cartNames[0][0]} at ${cartPrices[0][0]}.`)
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }
  else {
    console.log('Your shopping cart is empty.')
  }
}

function total() {
  var total = 0;
  for(let i=0; i<cart.length; i++){
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  var foundItem = false;
    for(let i=0; i<cart.length; i++){
      if(Object.keys(cart[i])[0] === item){
        cart.splice(i,1);
        foundItem = true;
      }
    }
  if(foundItem === false){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
