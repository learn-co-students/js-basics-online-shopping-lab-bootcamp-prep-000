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
 var price = Math.floor(Math.random() * 100);
 cart.push({itemName: item, itemPrice: price});
 return `${ item } has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  var str = ``;
  for (var item in cart) {
    str += ` ${ cart[item].itemName } at $${ cart[item].itemPrice }`;
    //ternary to add commas and periods where needed
    item < cart.length - 1 ? str += `,` : str += `.`;
    //ternary to add "and" where needed
    item == cart.length - 2 ? str += ` and` : str += ``;
  }
  return `In your cart, you have${str}`;
}

function total() {
  // write your code here
  var total = 0;
  for (var item of cart) {
    total += item.itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i in cart) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return str;
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
