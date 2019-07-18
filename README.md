var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100 + 1)
  });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var returnable = `In your cart, you have `;
  if (cart.length == 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length == 1) {
    returnable += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return returnable;
  } else if (cart.length == 2) {
    returnable += `${cart[0].itemName} at $${cart[0].itemPrice}, `;
    returnable += `and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    return returnable;
  } else if (cart.length > 2) {
    for (var item in cart) {
      if (item != cart.length - 1) {
        returnable += `${cart[item].itemName} at $${cart[item].itemPrice}, `;
      } else {
        returnable += `and ${cart[item].itemName} at $${cart[item].itemPrice}.`;
        return returnable;
      }
    }
  }
}

function total() {
  var total = 0;
  for (var item in cart) {
    total += cart[item].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var plzBro = -1;
  for (index in cart) {
    if (cart[index].itemName == item) {
      plzBro = index;
    }
  }
  if (plzBro < 0) {
    return "That item is not in your cart.";
  } else {
    cart.splice(plzBro, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
