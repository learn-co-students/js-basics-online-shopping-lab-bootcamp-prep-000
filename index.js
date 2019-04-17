var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() { //this updates the items included in the cart list
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let shopping = {
   itemName: item,
   itemPrice: getRandomInt(100),
 };
 cart.push(shopping) //this adds the items to the cart
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
if (cart.length === 0) {
  return 'Your shopping cart is empty.'
} else {
for (let i = 0; i < cart.length; i++)
    return `In your cart, you have ${cart.join(', ')}`;
}
    //  let i = 0;
    //  while (i < whatIGot.length) {
    //      whatIGot.push(`${i+1}. ${line[i]}`)
    //      ++i
    //    } return `The line is currently: ${whosLeft.join(', ')}`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  // delete cart.
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    return `Your total cost is $undefined, which will be charged to the card 73013897.`
  }
}
