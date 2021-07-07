var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var itemOb = {};
  itemOb[item] = Math.floor(Math.random() * 101);
  cart.push(itemOb);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
    return
  }

  let str = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++) {
    let ob = cart[i];
    for (var item in ob) {str += ` ${item} at \$${ob[item]},` }
  }
  str = str.slice(0, str.length-1) + '.';
  console.log(str);
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = [...cart.splice(0, i), ...cart.splice(i+1)];
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart
}

function placeOrder(cardNum) {
  if (!cardNum) {console.log("We don't have a credit card on file for you to place your order.")}

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`);
  cart = [];
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
