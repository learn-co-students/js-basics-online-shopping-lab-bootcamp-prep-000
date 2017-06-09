let cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 101);
  let addItem = {};

  addItem[item] = price;
  cart.push(addItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  } else {
    //loop over the cart Array
    let listView = [];
    for (let i = 0; i < cart.length; i++) {
      //  In your cart you have [item and price pairs].
      let item = Object.keys(cart[i]);
      let price = cart[i][item];

      listView.push(`${item} at $${price}`);
    }
    listView = listView.join(', ');
    console.log(`In your cart, you have ${listView}.`);
  }
}

function removeFromCart(itemToDelete) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemToDelete)) {
      cart.splice(i, i + 1);
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(
      "We don't have a credit card on file for you to place your order."
    );
  } else {
    console.log(
      `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    );
  }
  cart = [];
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
