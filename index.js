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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  const obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    let msg = 'In your cart, you have ';
    for (let i = 0; i < cart.length; i++) {
      let obj = cart[i];
      for (var item in obj) {
        msg += `${item} at $${obj[item]}, `;
      }
    }
    console.log(msg.trim().slice(0, msg.length - 2) + '.');
  } else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    let obj = cart[i];
    if (obj.hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
