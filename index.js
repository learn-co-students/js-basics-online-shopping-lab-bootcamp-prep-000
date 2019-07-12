var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random() * 100);
  var name = `${item}`;
  var cartItem = { itemName: name, itemPrice: price };
  cart.push(cartItem);
  return (`${name} has been added to your cart.`);
}

addToCart('gloves');
addToCart('jacket');
addToCart('towel');

console.log(cart);

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var string = ('In your cart, you have ');
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    } else {
      for (var i = 0; i < cart.length - 1; i++) {
        string = string + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }

      return string + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    }
  }
}

viewCart();

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    } else if (cart[i].itemName != item) {
      return 'That item is not in your cart.';
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
