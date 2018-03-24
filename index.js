let cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;
  const itemObject = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  const phraseArray = [];
  for (let i = 0; i < cart.length; i += 1) {
    phraseArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  switch (true) {
    case cart.length === 0:
      return 'Your shopping cart is empty.';
    case cart.length === 1:
      return `In your cart, you have ${phraseArray[0]}.`;
    case cart.length === 2:
      return `In your cart, you have ${phraseArray.join(', and ')}.`;
    case cart.length > 2:
      for (let i = 0; i < phraseArray.length; i += 1) {
        return `In your cart, you have ${phraseArray
          .slice(0, -1)
          .join(', ')}, and ${phraseArray.slice(-1)}.`;
      }
  }
}

function total() {
  const costArray = [];
  for (let i = 0; i < cart.length; i += 1) {
    costArray.push(cart[i].itemPrice);
  }
  return costArray.reduce((a, b) => a + b, 0);
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].itemName.includes(item)) {
      return cart.splice(i, 1);
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  const cartTotal = total();
  cart.splice(0, cart.length);
  if (typeof cardNumber === 'undefined') {
    return "Sorry, we don't have a credit card on file for you.";
  }
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
}
