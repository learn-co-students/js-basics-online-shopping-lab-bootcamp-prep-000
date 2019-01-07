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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
}

function addToCart(item){
  var item;
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length<1){
    console.log(`Your shopping cart is empty.`);
  }
  var itemsAndPrices=[];
  for(var i=0;i<cart.length;i++){
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    itemsAndPrices.push(`${item} at $${cart[i][item]}`);
    }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
  }

function removeFromCart(item){
  let inCart = false;
  for(var i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      inCart = true;
      cart = cart.slice(0,i).concat(cart.slice(i+1))
    }
  }if(!inCart) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(creditcard) {
  if (creditcard == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditcard}.`)

  cart = []
}
