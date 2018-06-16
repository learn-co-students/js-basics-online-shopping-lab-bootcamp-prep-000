var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * Math.floor(100))});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var msg = 'Your shopping cart is empty.';
  var itm = {};
  var ret = cart.forEach(function (itm, idx, arr) {
    if (idx === 0) {
      msg = 'In your cart, you have ';
    } else {
      msg += ', ';
      if (idx === cart.length - 1) msg += "and ";
    }
    msg += itm.itemName + " at $" + itm.itemPrice;
    if (idx === cart.length - 1) msg += ".";
  });
  return msg;
}

function total() {
  var total = 0;
  var ret = cart.forEach(function (item, idx, arr) {
    total += item.itemPrice;
  })
  return total;
}

function removeFromCart(item) {
  var i = 0;
  var nm = '';
  var cnt = cart.length;
  for (i = 0; i < cnt; i++) {
    nm = cart[i].itemName;
    if (nm === item) {
      cart.splice(i, 1);
      break;
    }
  }
  if (cnt > cart.length) {
    return cart;
  } else {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  var msg = '';
  if (cardNumber === undefined) return "Sorry, we don't have a credit card on file for you.";
  var tot = total();
  cart = [];
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
}
