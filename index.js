var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = (Math.floor(Math.random() * 100));
  var itemName = {[item]: itemPrice};
  cart.push(itemName);
  // we are pushing individual objects into an array
  console.log ([item] + " has been added to your cart.");
  return cart;
}

function viewCart() {
 if (cart.length === 0){
  console.log ("Your shopping cart is empty.");
  }
  var cartObjects = [];
for (var i = 0; i < cart.length; i++){
  var itemsInCart = (cart[i]);
  var itemName = Object.keys(itemsInCart);
  //before had Object.keys(itemsInCart)[0], but there is no need
  //for [0] because we are only indexing one at a time anyway
  var itemPrice = itemsInCart[itemName];
  //[itemName] is a variable. using a variable as an object key
  cartObjects.push(`${itemName} at \$${itemPrice}`);
  // \$ allows us to add the dollar sign
}
switch(cartObjects.length){
  case 1:
  break;
  case 2:
  cartObjects = cartObjects.join(" and ")
  break;
  default:
  cartObjects[cartObjects.length-1] = "and ".concat(cartObjects[cart.length-1]);
  cartObjects = cartObjects.join(", ");
}
console.log(`In your cart, you have ${cartObjects}.`);
// why do we need to console.log???
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    for(var itemPrice in cart[i]){
      //var itemPrice is only in this function but cart is global scope
      // itemPrice is the enumerable property of each object in cart
      //remember, cart is an array filled with individual objects
      total = total + cart[i][itemPrice];
    }
  }
  return (total);
}

function removeFromCart(item) {
  var itemInCart = false;

  for(var i = 0, l = cart.length; i < l; i++){
    if (cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      //slice is inclusive on first index, non inclusive on second number.
      l--;
      //use l for cart.length. keeps l independent of cart
    }
  }
    if ([itemInCart]){
    console.log("That item is not in your cart.");
  }
return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.length = 0;
}
}
