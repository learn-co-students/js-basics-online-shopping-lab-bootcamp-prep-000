var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let Item = {};
 Item[item] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
 cart.push(Item);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    let greeting = 'In your cart, you have';

    for (let i = 0; i < cart.length; i++) {
      greeting += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;


      if (i + 1 < cart.length && cart.length > 2)
        greeting += ',';

      if (i + 1 === cart.length) {
        greeting += '.';
      } else if (i + 2 === cart.length) {
        greeting += ' and';
      }
    }

    console.log(greeting);
  }
}

function total() {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i][Object.keys(cart[i])];
  }

  return totalPrice;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }

  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
}
