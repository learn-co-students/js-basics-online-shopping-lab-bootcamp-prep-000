var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemName = item;
 let itemPrice = Math.floor(Math.random() * 100) + 1;
 let newObj = {[itemName]: itemPrice};
 cart.push(newObj);
 console.log(`${itemName} has been added to your cart.`)
 return cart;
}

function viewCart() {
  let message = 'In your cart, you have ';

  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  }

  if (cart.length === 1) {
    let itemName = Object.keys(cart[0])[0];
    let itemPrice = cart[0][itemName];
    message += `${itemName} at $${itemPrice}.`;
    console.log(message);
  }
  if (cart.length === 2) {
    let itemName0 = Object.keys(cart[0])[0];
    let itemName1 = Object.keys(cart[1])[0];
    let itemPrice0 = cart[0][itemName0];
    let itemPrice1 = cart[1][itemName1];
    message += `${itemName0} at $${itemPrice0} and ${itemName1} at $${itemPrice1}.`;
    console.log(message);
  }
  if (cart.length >= 3) {
    for (let i = 0; i < cart.length; i++) {
      let itemName = Object.keys(cart[i])[0];
      let itemPrice = cart[i][itemName];
      if (i === cart.length - 1) {
        message += `and ${itemName} at $${itemPrice}.`
      } else {
        message += `${itemName} at $${itemPrice}, `
      }
    }
    console.log(message);
  }
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let itemName = Object.keys(cart[i])[0];
    total += cart[i][itemName];
  }
  return total;
}

function removeFromCart(item) {
  let isPresent = false;
  let indexInArray = null;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i][item] !== undefined) {
      isPresent = true;
      indexInArray = i;
    }
  }

  if (isPresent) {
    cart.splice(indexInArray, 1)
    viewCart();
  } else {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  let totalPrice = total();
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
