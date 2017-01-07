var cart = [];

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

var getCart = () => {return cart}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  var j = cart.length;
if (j < 1) {console.log("Your shopping cart is empty.")}
else {var itemAndPrice = [];
  for(var i=0; i<j; i++) {
  for(var item in cart[i]) {
    itemAndPrice.push(`${item} at $${cart[i][item]}`)}}
  console.log(`In your cart, you have ${itemAndPrice.join(`, `)}.`)}
}

var removeFromCart = (item) => {
  var j = cart.length;
  let match = 0
    for(var i=0; i<j; i++) {
    if(item = cart[i]) {cart.splice([i], 1), match++}
    else {}
  }
    if(match === 0) {console.log("That item is not in your cart.")}
    else {}
}

var placeOrder = (number) => {
  if(!number) {console.log("We don't have a credit card on file for you to place your order.")}
  else {console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)}
  cart = [];
}
