var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newOb = Object.assign({}, item);
 newOb['itemName'] = item;
 newOb['itemPrice'] = Math.floor(Math.random() * 100);
 cart.push(newOb);
 return `${newOb.itemName} has been added to your cart.`;
}

function viewCart() {
  var strng = ['In your cart, you have '];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
      strng.push(`${cart[0].itemName} at $${cart[0].itemPrice}`);
      return strng.join("") + ".";
    } else {
    var list = [];
    for (var i = 0; i < cart.length; i++) {
      list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    list[list.length-1] = "and ".concat(list[list.length -1]);
    return strng.concat(list.join(", ")).join("") + ".";
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      var newCart = cart.splice(i, 1);
      return newCart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var total1 = total();
    cart = [];
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`;
  }
}
