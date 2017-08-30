var cart = [];
// var cart = [{"banana":60}]
// var cart = [{"banana":60}, {"orange":70}];
// var cart = [{"banana":60}, {"orange":70}, {"grapes": 14}, {"grapfruit":60}];
// var cart = [{"banana":60}, {"orange":70}, {"grapes": 14}]
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //var new_cart_item = { item: Math.floor(Math.random() * (100 - 1)) + 1};
 cart.push(new Object({ [item]: Math.floor(Math.random() * (100 - 1)) + 1 }));
 //cart.push(new_cart_item);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var cartList = "In your cart, you have ";
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  }
  else{
    for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    cartList += `${item} at $${cart[i][item]}${cart.length -1 == i ? "." : cart.length - 2 == i && cart.length == 2 ? " and " : cart.length - 2 == i ? ", and " : ", "}`;
    }
    console.log(cartList);
  }
}

function total() {
  // write your code here
  var cartTotal = 0
  for(var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    cartTotal +=  cart[i][item]
  }
  return cartTotal
}

function removeFromCart(item) {
  // write your code here
  for( var i = 0; cart.length > i ; i++){
  if (cart[i].hasOwnProperty(item)){
    cart.splice( i ,1);
    return cart;
  }
}
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined){
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}

function placeorder(m){
  var tina = m;
  return tina;
}
