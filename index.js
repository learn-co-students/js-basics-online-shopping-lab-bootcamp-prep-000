var cart = [];

function getCart(){
  return cart
}

function setCart(newCart) {
  cart = newCart;
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item){
var price = Math.floor(Math.random()*10);
var newItem = `${item} : ${price}`;
cart.push(newItem);
console.log (`${item} has been added to your cart.`);
return cart;
}

function viewCart(){
if (cart.length === 0) {return console.log('Your shopping cart is empty.')}
else{ const cartSentence = [];
var cartItems = Object.keys(cart);
for (var cartItems in cart) {
cartSentence.push(`${cartItems} at ${cart[cartItems]}`)};
{console.log(`In your cart, you have ${cartSentence.join(', ')}.`)
}
}
}

function removeFromCart(item){
  var cartItems = Object.keys(cart);
  if (cart.hasOwnProperty(item)) {
  delete cart.item }
  else {console.log("That item is not in your cart.")}
}

function placeOrder(cardNumber){
  if (!cardNumber)
  {return console.log("We don't have a credit card on file for you to place your order.")}
  else { return console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}`)}
  cart = [] }
