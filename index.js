var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(items) {
  const itemName = items;
  var price = Math.floor(Math.random() * (100 - 1) ) + 1;
  var item = { [itemName]: price };
  cart.push(item);
  console.log(itemName + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var intro = "In your cart, you have";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`${intro} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
      console.log(`${intro} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      intro = intro + ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
    }
    intro = intro + ` and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(intro);
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += +cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(item)) {
     cart.splice(i, 1);
     return cart
   }
 }
 console.log("That item is not in your cart.")
 return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber>0) {
    var finalTotal = total();
    console.log(`Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
  console.log("Sorry, we don't have a credit card on file for you.");
  }
}
