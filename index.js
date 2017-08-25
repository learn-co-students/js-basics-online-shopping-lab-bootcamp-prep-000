var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartString = "In your cart, you have ";
  var itemArr = [];
  var i;

  for (let item of cart) {
    itemArr.push(String(Object.keys(item)));
  }

  switch (cart.length) {
    case 0:
      cartString = 'Your shopping cart is empty.';
      break;
    case 1:
      cartString += `${itemArr[0]} at $${cart[0][itemArr[0]]}.`;
      break;
    case 2:
      cartString += `${itemArr[0]} at $${cart[0][itemArr[0]]} and ${itemArr[1]} at $${cart[1][itemArr[1]]}.`;
      break;
    default:
      for (i = 0; i < cart.length - 1; i++) {
        cartString += `${itemArr[i]} at $${cart[i][itemArr[i]]}, `;
      }
      cartString += `and ${itemArr[i]} at $${cart[i][itemArr[i]]}.`;
      break;
  }
  console.log (cartString);
}

function total() {
  var subtotal = 0;
  var itemArr = [];

  for (let item of cart) {
    itemArr.push(String(Object.keys(item)));
  }

  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i][itemArr[i]];
  }

  return subtotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (String(Object.keys(cart[i])) == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber || !Number.isInteger(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}
