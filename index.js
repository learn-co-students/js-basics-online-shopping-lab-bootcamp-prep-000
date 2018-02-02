var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
     cart.push({ [item]: price});
     console.log(`${item} has been added to your cart.`)
     return cart;
 }

function viewCart() {
  if(cart.length === 0){
    return console.log('Your shopping cart is empty.');
  } else if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)
  } else if (cart.length >= 3){
    var itemsAndPrices = [];
    for (var i = 0; i < cart.length; i++) {
      itemsAndPrices.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`);
    }
    itemsAndPrices[itemsAndPrices.length-1] = 'and '.concat(itemsAndPrices[itemsAndPrices.length-1]);
    itemsAndPrices = itemsAndPrices.join(', ');
    console.log(`In your cart, you have ${itemsAndPrices}.`)
  }
}

function total() {
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
   sum += cart[i][Object.keys(cart[i])];
 }
  return sum;
}

function removeFromCart(item) {
  var inCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      var inCart = true
      cart = cart.slice(0, i).concat(cart.slice(i+1))
    }
  }
  if (!inCart){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
   } else {
       console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
       cart = [];
   }
}
