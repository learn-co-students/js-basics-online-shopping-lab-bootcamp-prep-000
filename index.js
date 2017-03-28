var cart = [];

function randomNum() {
  return Math.floor((Math.random() * 100) + 1);
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

function getCart() {

  return cart
}

function addToCart( item ) {
  const price = randomNum();
	let obj = {};
  obj[item] = price;
  cart.push(obj);

  console.log(`${item} has been added to your cart.`);

  return cart
}

function viewCart() {
  const itemsPrices = [];

  if( cart.length === 0 ) {
    console.log("Your shopping cart is empty.");
  } else {
    for(var i = 0; i < cart.length; i++){
      for( var item in cart[i] ) {
        itemsPrices.push(`${item} at $${cart[i][item]}`);
      }
    }

  }
  console.log(`In your cart, you have ${itemsPrices.join(', ')}.`);
}

function removeFromCart( item ) {
  let hasItem = false;
  for(let i = 0; i < cart.length; i++) {
    if( cart[i].hasOwnProperty(item) ) {
     cart.splice(i, 1);
     hasItem = true;
    }
  }
    if(hasItem === false) {
      console.log("That item is not in your cart.");
    }
  return cart
}

function placeOrder( ccNumber ) {

  if ( ccNumber === undefined ) {

    console.log("We don't have a credit card on file for you to place your order.");

  } else {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);

  }
  //  empty array
  cart.length = 0;
}
