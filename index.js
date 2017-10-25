var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100) + 1);
  cart.push( { [item] : price } );

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsInCart = [];

  for (let i = 0; i < l; i++) {
    let itemInCart = cart[i];
    let item = Object.keys(itemInCart)[0];
    let price = itemInCart[item];

    itemsInCart.push(`${item} at \$${price}`);
  }

  switch(itemsInCart.length) {
    case 1:
      break;
    case 2:
      itemsInCart = itemsInCart.join(" and ");
      break;    default:
      itemsInCart[l-1] = "and ".concat(itemsInCart[l-1]);
      itemsInCart = itemsInCart.join(", ");
  }

  console.log(`In your cart, you have ${itemsInCart}.`);
}

function total() {
  let t = 0;

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
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
