var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  cart.push({
    [item]: Math.floor(Math.random() * 99) + 1
  });
  console.log(`${item} has been added to your cart.`);
  return setCart(cart);
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    let l = cart.length - 1;
    let keys = [];
    let values = [];
    let nameStr = 'In your cart, you have ';

    cart.forEach((item) => {
      keys.push(Object.keys(item));
      values.push(item[Object.keys(item)]);
    });
    switch (cart.length) {
      case 1:
        nameStr += `${keys[0]} at $${values[0]}.`;
        break;
      case 2:
        nameStr += `${keys[0]} at $${values[0]} and ${keys[1]} at $${values[1]}.`
        break;
      default:
        for (let i = 0; i < l; i++) {
          nameStr += `${keys[i]} at $${values[i]}, `
        }
        nameStr += `and ${keys[l]} at $${values[l]}.`;
        break;
    }
    console.log(nameStr)
  }
}

function total() {
  // write your code here
  let total = 0;
  cart.forEach((item) => {
    for (var key in item) {
      total += item[key];
    }
  });
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart.length = 0;
}
