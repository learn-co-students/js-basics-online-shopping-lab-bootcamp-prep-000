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
 var itemPrice = Math.floor(Math.random() * 100) + 1;
cart.push({ [item]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
   console.log("Your shopping cart is empty.");
 } else {
  var items = [];
   for (var i = 0; i < cart.length; i++) {
   items.push( Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])] )
 }
if (cart.length === 1) {
 console.log(`In your cart, you have ${items[0]}.`)
} else if (cart.length === 2) {
 console.log(`In your cart, you have ${items[0]} and ${items[1]}.`)
} else if (cart.length > 2) {
 var tempCart = items.slice(0, items.length - 1).join(", ");
 console.log(`In your cart, you have ${tempCart}, and ${items[items.length - 1]}.`)
}
}
}
function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var curTotal = cart[i]
    var item = Object.keys(curTotal);
    total += curTotal[item]
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
