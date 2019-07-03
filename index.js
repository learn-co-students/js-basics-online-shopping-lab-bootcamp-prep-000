var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);

  cart.push({ itemName: item, itemPrice: price });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cart_string = "In your cart, you have";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    const items_prices = [];
    for (let index = 0; index < cart.length; index++) {
      var cart_item_price = cart[index];
      var item = Object.values(cart_item_price)[0];
      var price = Object.values(cart_item_price)[1];
      items_prices.push(`${item} at \$${price}`);
    }
    return `In your cart, you have ${items_prices
      .join(", ")
      .replace(/, ([^,]*)$/, ", and $1")}.`;
  }
}

function total() {
  var total = 0;
  for (let index = 0; index < cart.length; index++) {
    const cart_item_price = cart[index];
    var price = Object.values(cart_item_price)[1];
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let index = 0; index < cart.length; index++) {
    if (cart[index].itemName === item) {
      cart.splice(index, 1);
      itemInCart = true;
    }
  }

  if (!itemInCart) {
    return "That item is not in your cart.";
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var total_to_charge = total();
    cart.length = 0;
    return `Your total cost is $${total_to_charge}, which will be charged to the card ${cardNumber}.`;
  }
}
