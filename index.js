var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
return t
}

var cart = [];

function getCart() {
  return cart};

function addToCart(item) {
  var price = Math.floor(Math.random()*100);

  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);

  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")};

var itemsandprices = [];
for (var i = 0; i < cart.length; i++){
  itemsandprices.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
}
console.log(`In your cart, you have ${itemsandprices.join(', ')}.`)}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemincart = cart[i].hasOwnProperty(item);
  if (itemincart) {cart.splice(i,1)}
}
  if (!itemincart) {console.log("That item is not in your cart.")};
  return cart
}


  function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
      console.log("We don't have a credit card on file for you to place your order.")
    }  else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    };
  cart.length = 0
}
