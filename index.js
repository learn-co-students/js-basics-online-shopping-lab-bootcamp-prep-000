var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemInfo = {
    itemName: `${item}`,
    itemPrice: (Math.floor(Math.random() * 100) + 1)
  }
  cart.push(itemInfo);
  return (`${item} has been added to your cart.`);
}
function viewCart() {
  // Response if cart is empty
  if (cart.length === 0) {
    return ('Your shopping cart is empty.');
  // Response if Cart only has 1 item
  } else if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  // Response if cart has more than 1 item
  } else if (cart.length > 1) {
    var viewCartString = '';
    for (var i = 0; i < (cart.length - 1); i++) {
      viewCartString = viewCartString + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
    }
    return (`In your cart, you have ` + viewCartString + `and ${getCart()[cart.length - 1].itemName} at $${getCart()[cart.length - 1].itemPrice}.`);
  }
}

function total() {
  var price = 0;
  // loop through itemPrice and add them together
  for (var i = 0; i < cart.length; i++) {
    price = price + getCart()[i].itemPrice;
  }
  // return total price
  return price;

}

function removeFromCart(item) {
  // loop through the cart to search for item match
  for (var i = 0; i < cart.length; i++) {
    // if it matches
    if (cart[i].itemName === item) {
      // spice out the item
      cart.splice(i, 1);
      // return cart without removed item
      return cart;
    }
  }
  // if not return not in cart message
  return `That item is not in your cart.`
}



function placeOrder(cardNumber) {
  // check for card number
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
