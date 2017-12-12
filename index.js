var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: itemPrice });

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const cartLength = cart.length;

  if (!cartLength) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let cartIndex = 0; cartIndex < cartLength; cartIndex++) {
    let eachItem = cart[cartIndex];
    let itemName = Object.keys(eachItem)[0];
    let itemPrice = eachItem[itemName];

    itemsAndPrices.push(`${itemName} at \$${itemPrice}`);
}

    switch (itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
        itemsAndPrices[cartLength-1] = "and ".concat(itemsAndPrices[cartLength-1]);
        itemsAndPrices = itemsAndPrices.join(", ");
    }

    console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  let cartTotal = 0;

  for (let cartIndex = 0, cartLength = cart.length; cartIndex < cartLength; cartIndex++) {
    for (let item in cart[cartIndex]) {
      cartTotal += cart[cartIndex][item];
  }
}
  return cartTotal;

}

function removeFromCart(item) {
  let itemInCart = false;

  for (let cartIndex = 0, cartLength = cart.length; cartIndex < cartLength; cartIndex++) {
    if (cart[cartIndex].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, cartIndex).concat(cart.slice(cartIndex + 1));
      cartLength--;
    }
  }


  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
