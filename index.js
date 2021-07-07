var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]:Math.floor(Math.random() * 100) + 1});
  console.log(`${item} has been added to your cart.`);
  return cart;
 }

function viewCart() {
  var itemsAndPrices = []
  var cartL = cart.length
  for (let i = 0; i < cartL; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    itemsAndPrices.push(`${item} at \$${price}`);
  } let greeting = 'In your cart, you have '
  if (cartL === 0) {console.log('Your shopping cart is empty.')}
  else if (cartL === 1) {console.log(`${greeting}${itemsAndPrices[0]}.`)}
  else if (cartL === 2) {console.log(`${greeting}${itemsAndPrices[0]} and ${itemsAndPrices[1]}.`)}
  else {
    var itemsAndPricesAnd = []
    for (let i = 0; i < cartL; i++) {
      if (i === cartL - 1) {itemsAndPricesAnd.push(`and ${itemsAndPrices[i]}`)}
      else { itemsAndPricesAnd.push(`${itemsAndPrices[i]}`)}
    }
    console.log(`${greeting}${itemsAndPricesAnd.join(', ')}\.`)
    }

  }




function total() {
  var pr = [];
  var cartL = cart.length;
  for (let i = 0; i < cartL; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    pr.push(price);
} return pr.reduce(function(accumulator, currentValue) {return accumulator + currentValue})
}

function removeFromCart(item) {
  var cartL = cart.length;
  for (let i = 0; i < cartL; i++) {
    if (cart[i].hasOwnProperty(item) === true) {cart.splice(i, 1); return cart}
  } console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {console.log('Sorry, we don\'t have a credit card on file for you.')}
  else {console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`); cart = []}
}
