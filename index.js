var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const itemPrice = Math.floor(Math.random()*100+1);
  cart.push( {[itemName]: itemPrice} )
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var bigCart = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  } else if (cart.length === 2) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
  } else {
      for (let i = 0; i < cart.length - 1; i++) {
        bigCart.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    } 
    console.log(`In your cart, you have${bigCart}, and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`);
  }
}

function total() {
  var price = [];
  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    var itemPrice = [Object.values(cart[i])];
    price.push(parseInt(itemPrice));
  }
  for (let j = 0; j < price.length; j++) {
    totalPrice = price[j] += totalPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var inCart = [];
  for (let i = 0; i < cart.length; i++) {
    var newCart = cart[i];
    var key = Object.keys(cart[i]);
    if (newCart.hasOwnProperty(item)) {
      inCart = cart.splice(i,1);
    }
  }
  if (inCart.length === 0) {
    console.log('That item is not in your cart.')
  } else {
      return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart.length = 0;
}