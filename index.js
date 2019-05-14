var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1});
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var ans = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    if (i > 0) {
      ans += ", "
    }
    if (i === cart.length - 1 && cart.length > 1) {
      ans += "and "
    }
    ans += `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  ans += "."
  return ans;
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    var t = total();
    cart = [];
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
