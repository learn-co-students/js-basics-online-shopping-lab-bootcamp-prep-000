var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName]: getRandomInt(1,100)});
  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const length = cart.length;

  if (length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    const itemsAndPrices = [];

    for (var i = 0; i < length; i++) {
      const item = cart[i];
      const itemName = Object.keys(item)[0];
      const price = item[itemName];

      console.log(itemName);

      itemsAndPrices.push(`${itemName} at $${price}`);
    }
    if (length == 1) {
      console.log(`In your cart, you have ${itemsAndPrices}.`);
    } else if (length == 2) {
      console.log(`In your cart, you have ${itemsAndPrices.join(" and ")}.`);
    } else {
      console.log(`In your cart, you have ${itemsAndPrices.slice(0, length-1).join(", ")}, and ${itemsAndPrices.slice(length-1)}.`);
    }
  }
}

function total() {
  var total = 0;
  const length = cart.length;

  for (var i = 0; i < length; i++) {
    const item = cart[i];
    const itemName = Object.keys(item)[0];

    total += item[itemName];
  }

  return total;
}

function removeFromCart(itemName) {
  const length = cart.length;

  for (var i = 0; i < length; i++) {
    const item = cart[i];

    if (item.hasOwnProperty(itemName)) {
      return cart.splice(i,1);
    }
  }

  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber != null) {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
