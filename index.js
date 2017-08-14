var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 const itemPrice = Math.floor(Math.random() * 100) + 1
 cart.push({ [itemName]: itemPrice })
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  const l = cart.length;

  if(!l) {
    return console.log('Your shopping cart is empty.');
  }

  var itemsAndPrices = [];

  for(var i = 0; i < l; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}


function total() {
  // write your code here
  var t = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}

function removeFromCart(itemName) {
  // write your code here
  var itemInCart = false;

  for(var i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(itemName)) {
      itemInCart = true;
      cart = cart.slice(0,i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if(!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];

}
