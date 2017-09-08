var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var itemObject = { [item]: itemPrice };
  cart.push(itemObject)
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  }

  var itemsAndPrice = [];

  for(var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    statement += `${cart[i]} at $${cart[i]}, `
  }

  return console.log(`In your cart, you have ${statement
  // return console.log(`${statement.slice(0, statement.length-2)}.`)
}


function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      sum += cart[i][item]; // cart[i][item] = itemPrice
    }
  }
  return sum;
}

function removeFromCart(item) {
  let itemInCart = false;

  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if(!itemInCart) {
    console.log('That item is not in your cart.')
  }

  return cart;
}

function placeOrder(cardNumber) {

}
