var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
cart.push({[item]:price});
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  if ( cart.length === 0 ) {
    return console.log("Your shopping cart is empty.")
  }

  else {
  var itemsAndPrices = [];
  for (var i = 0; i < cart.length ; i++) {
    var items = Object.keys(cart[i]);
    var price = cart[i][items]
    itemsAndPrices.push(`${items} at ${price}`);
  }
  return console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}}

function removeFromCart(item){
let  itemInCart = false

  for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    itemInCart = true;
    cart.splice(i,1);
  }}

  if (itemInCart === false) {
    return console.log ("That item is not in your cart.")
  }
  return cart
}

function placeOrder (n){
  if (n == null ){
    return console.log ("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`)
  }
  cart = []
}
