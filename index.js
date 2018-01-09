var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 cart;

 var price = Math.floor(Math.random(101) * (100 - 1)) + 1;
 var items = {[item]:price};
 //Object.assign(myc, {[name]: price});
 cart.push(items);

 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  cart;

var s = "In your cart, you have ";

if (!cart.length) {
  console.log( "Your shopping cart is empty.");
}

const l = cart.length;
let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);


}

function total() {
  
  cart;
  var t = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;

}

function removeFromCart(item) {

  if (cart.length > 0) {
   for (var i = 0; i < cart.length; i++) {
     if (cart[i].hasOwnProperty(item)) {
     cart.splice(i, 1);

 } }} else {
 console.log("That item is not in your cart.");
 }
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");}
    else {

    var value = total();
    console.log(`Your total cost is $${value}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}