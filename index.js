var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let items = {
      itemName: item,
      itemPrice: Math.floor((Math.random() * 100) + 1)
  };
  cart.push(items);
  return `${items.itemName} has been added to your cart.`;
}

function viewCart() {
    if (cart.length === 0) {
     return 'Your shopping cart is empty.';
    } else if (cart.length === 1) {
     return `In your cart, you have ${Object.keys(itemName)} at $${Object.values(itemPrice)}.`;
    } else if (cart.length === 2) {
     return `In your cart, you have ${cart.itemName} at ${cart.itemPrice}, and ${cart.itemName} at ${cart.itemPrice}.`;
    } else {
     return `In your cart, you have ${cart.itemName[i]} at ${cart.itemPrice[i]}, ${cart.itemName[i]} at ${cart.itemPrice[i]}, and ${cart.itemName[i]} at ${cart.itemPrice[i]}.`;
    }
}

function total() {
  let totalPrice = 0;
  let itemInCartPrice = [];
  for (let i = 0; i < cart.length; i++) {
    var itemPrice = cart[i][Object.keys(cart[i])];
    itemInCartPrice.push(itemPrice);
  }
  for (let j = 0; j < itemInCartPrice.length; j++) {
    totalPrice = itemInCartPrice[j] += totalPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  if (item !== cart[item]) {
    return 'That item is not in your cart.';
  } else {
    cart.splice(item[cart], 1);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    cart.splice(0, cart.length);
  }
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
}
