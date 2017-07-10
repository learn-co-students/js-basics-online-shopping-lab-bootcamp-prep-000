var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var oCart = {[item]: Math.floor((Math.random() * 100) + 1)};

  cart.push(oCart);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function getCartItemName(cartItem) {
  return Object.keys(cartItem)[0];
}

function getCartItemPrice(cartItem) {
  return cartItem[getCartItemName(cartItem)];
}

function viewCart() {
  var output = "In your cart, you have ";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  } else if (cart.length === 1) {
    output += `${getCartItemName(cart[0])} at $${getCartItemPrice(cart[0])}.`;
  } else if (cart.length === 2) {
    output += `${getCartItemName(cart[0])} at $${getCartItemPrice(cart[0])} and `;
    output += `${getCartItemName(cart[1])} at $${getCartItemPrice(cart[1])}.`;
  } else if (cart.length >= 3) {
    cart.forEach(function(cartItem, i) {
      if (i === cart.length - 1) {
        output += `and ${getCartItemName(cartItem)} at $${getCartItemPrice(cartItem)}.`;
      } else {
        output += `${getCartItemName(cartItem)} at $${getCartItemPrice(cartItem)}, `;
      }
    });

  }

  console.log(output);
  return output;
}

function total() {
  var totalPrice = 0;
  cart.forEach(function(cartItem) {
    totalPrice += getCartItemPrice(cartItem);
  });
  return totalPrice;
}

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i, 1);
      return;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
