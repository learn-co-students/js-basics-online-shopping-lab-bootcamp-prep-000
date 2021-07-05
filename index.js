var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ itemName: item, itemPrice: Math.floor(Math.random() * Math.floor(101)), });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length > 1) {
    let string = '';
    for (let i = 0; i < cart.length; i++) {
      if (i < cart.length - 1) {
        string += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      } else {
        string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
    }
    return `In your cart, you have ${string}`;
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
  return  "Your shopping cart is empty.";
  }
}

function total() {
  return cart.reduce((acc, cur) => acc + cur.itemPrice, 0);
}

function removeFromCart(item) {
  let length = cart.length;
  cart = cart.filter(cartItem => cartItem.itemName !== item);
  if (cart.length === length) {
    return 'That item is not in your cart.';
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    let myTotal = total();
    cart = [];
    return `Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
