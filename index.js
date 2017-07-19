var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  const price = getRandomPrice();
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }

  const item = cart[0];
  const itemName = Object.keys(item)[0];
  let cartDisplay = `In your cart, you have ${itemName} at $${item[itemName]}`;

  if (cart.length === 1) {
    cartDisplay = `${cartDisplay}.`;
  } else if (cart.length === 2) {
    const item = cart[1];
    const itemName = Object.keys(item)[0];
    cartDisplay = `${cartDisplay} and ${itemName} at $${item[itemName]}.`;
  } else {
    const remainingItems = cart.slice(1);
    remainingItems.forEach(function (item, idx) {
      const itemName = Object.keys(item)[0];
      if (idx === remainingItems.length - 1) {
        cartDisplay = `${cartDisplay}, and ${itemName} at $${item[itemName]}.`;
      } else {
        cartDisplay = `${cartDisplay}, ${itemName} at $${item[itemName]}`;
      }
    });
  }

  console.log(cartDisplay);
}

function total() {
  let total = 0;
  cart.forEach(function (item) {
    const itemName = Object.keys(item)[0];
    total += item[itemName];
  });

  return total;
}

function removeFromCart(itemName) {
  let hasRemoved = false;

  cart.slice().forEach(function (currentItem, idx) {
    const currentItemName = Object.keys(currentItem)[0];
    if (currentItemName === itemName) {
      cart.splice(idx, 1);
      hasRemoved = true;
    }
  });

  if (!hasRemoved) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
