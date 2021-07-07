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
  let newOject = {};
  let value = Math.floor(Math.random() * 101);
  newOject[item] = value;
  cart.push(newOject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  let itemAndPrice = [];
  // write your code here
  for (let index = 0; index < cart.length; index++) {
    for (const x in cart[index]) { //bananas at $17
      itemAndPrice.push(`${x} at $${cart[index][x]}`);
    }
  }
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  if (cart.length === 1) {
    console.log(`In your cart, you have ${itemAndPrice[0]}.`);
  }
  if (cart.length === 2) {
    console.log(`In your cart, you have ${itemAndPrice[0]} and ${itemAndPrice[1]}.`)
  }
  if (cart.length > 2) {
    let lastItem =  itemAndPrice.pop();
    let concatItemPrice = itemAndPrice.join(", ");
    console.log(`In your cart, you have ${concatItemPrice}, and ${lastItem}.`);
  }
  /* commented out
  if (cart.length >= 3) {
    let stringer = '';
    for (let newIndex = 0; newIndex < itemAndPrice.length - 2; newIndex++) {
      stringer = stringer + itemAndPrice[newIndex] + ', '
    }
    console.log(`In your cart, you have ${stringer}and ${itemAndPrice[itemAndPrice.length-1]}.`);
  }
  */

}

function total() {
  // write your code here
  let total = 0
  for (let index = 0; index < cart.length; index++) {
    for (const y in cart[index]) {
      total += cart[index][y];
    }
  }
  let totalPrice = parseInt(total);
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  let itemInCart = [];
  for (let index = 0; index < cart.length; index++) {
    for (const x in cart[index]) {
      itemInCart.push(x);
      if (x == item) {
        cart.splice(index, 1);
      }
    }
  }
  let inCartOrNot = itemInCart.indexOf(item);
  if (inCartOrNot < 0) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  return cart;
}
