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
 let obj = {
   itemName : item,
   itemPrice: Math.floor(Math.random() * 100 + 1)
 }
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) return 'Your shopping cart is empty.';
  let baseString = 'In your cart, you have ';
  let i = 1;
  baseString = baseString + `${cart[0].itemName} at $${cart[0].itemPrice}`;
  while (i < cart.length) {
    if (i == cart.length - 1) {
      baseString = baseString + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else {
      baseString = baseString + `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    i++;
  }
  baseString = baseString + '.';
  return baseString;
}

function total() {
  // write your code here
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  let totalValue = total();
  cart = [];
  console.log(totalValue);
  return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`;
}
