var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function addToCart(item) {
const price = getRandomIntInclusive(1,100)

cart.push({ [item]:price})

console.log(`${item} has been added to your cart.`)

return cart
}

function viewCart() {
  const l = cart.length;
if (l === parseInt(0)) {
  return console.log("Your shopping cart is empty.")
}
let itemsAndPrices = [];
for (let i = 0;i<l;i++) {
  let itemAndPrice = cart[i];
  let item = Object.keys(itemAndPrice)[0];
  let price = itemAndPrice[item];
  itemsAndPrices.push(`${item} at \$${price}`);
}
switch(itemsAndPrices.length) {
  case 1:
    break;
  case 2:
    itemsAndPrices = itemsAndPrices.join(" and ");// replaces the comma
    //separator with an "and" separator?
    break;
  default:
    itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
    itemsAndPrices = itemsAndPrices.join(", ");//
}
console.log(`In your cart, you have ${itemsAndPrices}.`)
}
//add $item at $price,

function total() {
  let totalValue = 0;
  const l = cart.length; //const cant be changed, var can, but use let instead
  if (l===parseInt(0)) {
    return totalValue; //returns totalValue and leaves function
  } //end if
  for (let i = 0;i<l;i++) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];
    totalValue = totalValue + parseInt(price);
  }
  return totalValue;
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0, l = cart.length;i<l;i++) {
if (cart[i].hasOwnProperty(item)) {
  itemInCart = true;
  cart = cart.slice(0, i).concat(cart.slice(i + 1)); //slice is exclusive
  l--; //in case item is an array
}
}
if (itemInCart === false) {
  console.log("That item is not in your cart.");
}
}

function placeOrder(cardNumber) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
