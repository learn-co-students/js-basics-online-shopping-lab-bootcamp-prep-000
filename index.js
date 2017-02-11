var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length < 1) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var itemsInCart = `In your cart, you have `;
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        itemsInCart += `${item} at $${cart[i][item]}`;
      }
      if (i < cart.length - 1) {
        itemsInCart += `, `;
      } else {
        itemsInCart += `.`;
      }
    }
    console.log(itemsInCart);
  }
}

function total() {
  let t = 0;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1);
    }
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  } else {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
}
