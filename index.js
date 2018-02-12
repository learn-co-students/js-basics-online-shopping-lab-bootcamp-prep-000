var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  if (arguments.length === 0) {
    return cart;
  }
 var newItem = {
   [item]: Math.floor(Math.random() * 100)
 }
 cart.push(newItem);
 console.log(item + ' has been added to your cart.');
return cart;
}

function viewCart() {
if (!cart.length) {
  console.log('Your shopping cart is empty.');
} else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
} else if (cart.length > 1) {
  let newCart = [];
  newCart.push(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}`);
  for (let i = 1; i < cart.length - 1; i++) {
    newCart.push(` ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`);
  }
    if (cart.length === 2) {
    var myCart = `${newCart.toString()} and ${Object.keys(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[0]}.`;
    console.log(myCart);
    } else {
      myCart = `${newCart.toString()}, and ${Object.keys(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[0]}.`;
    console.log(myCart);
    }
}
}

function total() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += Object.values(cart[i])[0];
  }
  return totalCost;
}

function removeFromCart(item) {
  let removedItem = false
  for (let i = 0; i < cart.length; i++) {
    if (item === Object.keys(cart[i])[0]) {
      cart.splice(i, 1);
      return cart;
     }
  }
  if (!removedItem) {
  console.log('That item is not in your cart.');
  return cart;
}
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
