var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({ [itemName]: itemPrice });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    console.log('Your shopping cart is empty.');
  }

  let cartInfo = [];

  for (let i = 0; i < l; i++) {
    let itemInfo = cart[i];
    let itemName = Object.keys(itemInfo)[0];
    let itemPrice = itemInfo[itemName];

    cartInfo.push(`${itemName} at \$${itemPrice}`);
  }

  switch(cartInfo.length) {
    case 1:
      break;
    case 2:
      cartInfo = cartInfo.join(" and ");
      break;
    default:
      cartInfo[l-1] = "and ".concat(cartInfo[l-1]);
      cartInfo = cartInfo.join(", ");
  }

  console.log(`In your cart, you have ${cartInfo}.` );
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
