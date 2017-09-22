var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(string) {
  console.log(`${string} has been added to your cart.`)
  var string = {[string]: Math.floor(Math.random() * 100)}
  cart.push(string)
  if (cart.length > 0) {
    return cart
  }
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    console.log ('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    var itemAtPrice = [];
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      var price = cart[i][item];
      itemAtPrice.push(`${item} at $${price}`);
      if (i === cart.length - 1) {
        itemAtPrice.push(`and ${item} at $${price}`)
      }
    }
    itemAtPrice.splice(itemAtPrice.length - 2, 1)
    console.log (`In your cart, you have ${itemAtPrice.join(', ')}.`)
  }
}


/*  } else if (cart.length === 1) {
  console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else if (cart.length === 3) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}, ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}, and ${Object.keys(cart[2])} at $${cart[2][Object.keys(cart[2])]}.`)
  } */

function total() {
    var total = 0
    for (let i = 0; i < cart.length; i++) {
      total += cart[i][Object.keys(cart[i])[0]]
  }
   return total
}

  // write your code here

function removeFromCart(string) {
  for (let i = 0; cart.length > i; i++) {
    if (cart[i].hasOwnProperty(string)) {
      cart.splice(i, 1)
    }
  }
  if (cart.hasOwnProperty(string) === false) {
      console.log(`That item is not in your cart.`)};
  }
  // write your code here
function placeOrder(creditCard) {
  if (!creditCard) {
    console.log (`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
  return cart;
}
