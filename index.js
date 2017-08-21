var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random()*(100-1+1))+1;
  item = {[itemName]: itemPrice};
  cart.push(item);
	if (cart[cart.length-1].hasOwnProperty(itemName)) {
    console.log(`${itemName} has been added to your cart.`)
    }
return cart
}

function viewCart() {
  const cart = getCart();
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${getCart()[0][Object.keys(cart[0])[0]]}.`)
  }
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${getCart()[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])} at $${getCart()[1][Object.keys(cart[1])[0]]}.`)
  }
  else {
    var cartValuesAndCosts = [];
    var lastValueAndCost = [];
    for (let i = 0; i<cart.length-1; i++) {
      cartValuesAndCosts.push(` ${Object.keys(cart[i])} at $${getCart()[i][Object.keys(cart[i])[0]]}`);
    }
    lastValueAndCost.push( `${Object.keys(cart[cart.length-1])} at $${getCart()[cart.length-1][Object.keys(cart[cart.length-1])[0]]}`);
    console.log(`In your cart, you have${cartValuesAndCosts}, and ${lastValueAndCost}.`)
    }
  }

function total() {
    var grocTotal = 0;
    for (let i = 0; i<cart.length; i++) {
      grocTotal = grocTotal + parseInt(cart[i][Object.keys(cart[i])]);
      }
  return grocTotal;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice (i, 1)
        return cart
    }
  }
    console.log("That item is not in your cart.");
    return cart
  }

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length)
  }
}
