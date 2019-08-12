var cart = [];
function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100) };
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var last_item = cart.length - 1;
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${
      cart[0].itemPrice
    }.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${
      cart[0].itemPrice
    }, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var str = "In your cart, you have ";
    for(var i = 0; i < last_item; i++ ) {
      str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return str + `and ${cart[last_item].itemName} at $${cart[last_item].itemPrice}.`
  }
}

function total() {
  var money = 0;
  for (var i = 0; i < cart.length; i++) {
    money += cart[i].itemPrice;
  }
  return money;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
    if (item !== cart[item]) {
      return "That item is not in your cart.";
    }
}

function placeOrder(cardNumber) {
  var t = total();
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
}
