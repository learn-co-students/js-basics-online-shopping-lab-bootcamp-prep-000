var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(100*(Math.random()));
 var item_object = {[item]: price};
 cart.push(item_object);

 console.log (`${item} has been added to your cart.`);
}

addToCart("bananas")
addToCart("apples")
addToCart("carrots")
addToCart("daikon")

function viewCart() {
  var insideCart = [];
  if (cart.length===0) {
    console.log("Your shopping cart is empty")
  } else if(cart.length===1) {
  var insideCartOne = `In your cart, you have ${Object.key(cart[0])}
  at $${(cart[0] [Object.keys[0])]}`
  console.log(insideCartOne)
} else {
  for (i=0; i < cart.length-1; i++) {
    console.log(cart[i]);
    insideCart.push(`${Object.keys(cart[i])} at $${cart[i] [Object.keys(cart[i])]}`);
  }
}

viewCart(cart);



function total() {
  var eachItemPrice = [];
  var totalPrice = 0

  for(var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i] [Object.keys(cart[i])]
    eachItemPrice.push(itemPrice)

  }
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
