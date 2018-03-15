var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var str = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    if (i === cart.length - 1 && i > 0)
      str += "and ";
    str += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
  return (cart.length) ? str.slice(0, -2) + '.' : "Your shopping cart is empty.";
}

function total() {
  let tot = 0;
  for (let i = 0; i < cart.length; i++) {
    tot += cart[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  let flag = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      flag = true;
      break;
    }
  }
  return (flag) ? cart : "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (arguments.length === 0)
    return "Sorry, we don't have a credit card on file for you.";
  var tot = total();
  cart = [];
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
}
