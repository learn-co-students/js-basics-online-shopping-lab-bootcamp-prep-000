var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({ [itemName]: Math.floor(Math.random() * 100) });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsPrices = [];
  var moreItemsPrices = [];
      for (var i = 0; i < cart.length; i++) {
    itemsPrices.push( `${Object.keys(cart[i]) } at $${ Object.values(cart[i]) }` );
        }
  moreItemsPrices = itemsPrices.slice(0, cart.length - 1);
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else  if (cart.length === 1) {
    console.log(`In your cart, you have ${itemsPrices.join('')}.`);
  } else  if (cart.length === 2) {
    console.log(`In your cart, you have ${itemsPrices.join(' and ')}.`);
  } else {
    console.log( `In your cart, you have ${moreItemsPrices.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${ Object.values(cart[cart.length-1]) }.` );
  }
}

function total() {
  var prices = [];
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    prices.push(parseInt(Object.values(cart[i]), 10));
    total = (total + prices[i]);
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1);
            return cart;
        }
    }
    return console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
