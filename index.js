var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  let itemObj = {
    [item]: price
  };
  console.log(itemObj);
  cart.push(itemObj);
  console.log(cart);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function getInfo(object) {
  let item = (Object.keys(object))[0];
  let price = object[item];
  return [item, price];
}

function viewCart() {
  let cartString = 'In your cart, you have';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (let i = 0; i < cart.length; i++) {
      let itemObj = getInfo(cart[i]);
      let itemPrice = `${itemObj[0]} at $${itemObj[1]}`;
      if (cart.length === 1) {
        cartString = `${cartString} ${itemPrice}.`;
      }
        else if ((i + 1) === cart.length) {
        cartString = `${cartString} and ${itemPrice}.`;
      } else if (cart.length === 2) {
        cartString = `${cartString} ${itemPrice}`;
      } else {
        cartString = `${cartString} ${itemPrice},`;
      }
    }
  console.log(cartString);
  }
}

function total() {
  let cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    let itemObj = getInfo(cart[i]);
    cartTotal = cartTotal + itemObj[1];
  }
  return cartTotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    let itemObj = getInfo(cart[i]);
    if (itemObj.includes(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
