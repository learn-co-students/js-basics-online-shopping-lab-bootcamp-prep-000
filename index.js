var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price;
  cart.push(item_object);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    console.log(printOneItem);

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`;
    console.log(printTwoItems);
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`;
          console.log(printThreeOrMoreItems);
  }
}

function total() {
  var totalprice = 0;
  for (var i = 0; i < cart.length; i++){
    var itemi = Object.keys(cart[i]);
    var pricei = cart[i][itemi];
    totalprice = totalprice + pricei }
  return totalprice;
}

function removeFromCart(item) {
  var present = false;
  if (cart.length > 0){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1);
      console.log(cart);
      present = true}}}
  if (present === false){console.log('That item is not in your cart.')}
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.")   }
   else {console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
    cart = [];
}
