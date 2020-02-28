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
 var item = item,
     rand = Math.floor(Math.random() * 100) + 1,
     obj = new Object({ [item] : rand});

 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function nulle() { }

function viewCart() {
  // write your code here
  const l = cart.length;

  if (!l) {
    console.log('Your shopping cart is empty.');
  } else
  if (l === 1) {
    let itemName = Object.keys(cart[0]),
        itemPrice = Object.values(cart[0]);
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  } else
  if (l === 2) {
    let arr = [];

    for (let i = 0; i < l; i++) {
      let itemName = Object.keys(cart[i]);
      let itemPrice = Object.values(cart[i]);

      arr.push(`${itemName} at $${itemPrice}`);
    }

    console.log(`In your cart, you have ${arr.join(' and ')}.`);
  } else
  if (l > 2) {
    let arr = [];

    for (let i = 0; i < l; i++) {
      let itemName = Object.keys(cart[i]);
      let itemPrice = Object.values(cart[i]);
      let item = `${itemName} at $${itemPrice}`;

      i === l - 1 ? item = 'and ' + item : nulle();

      arr.push(item);
    }
    console.log(`In your cart, you have ${arr.join(', ')}.`);
  }
}

function total() {
  // write your code here
  let total = 0;
  let item;

  for (item in cart) {
    let itemPrice = Object.values(cart[item]);
    total += parseInt(itemPrice);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let x;
  let hasItem = false;

  for (x in cart) {
    if (cart[x].hasOwnProperty(item)) {
      hasItem = true;
      cart.splice(x, 1);
    }
  }

  !hasItem ? console.log('That item is not in your cart.') : nulle();
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  let mess;
  let card = cardNumber;
  !cardNumber ? mess = `Sorry, we don't have a credit card on file for you.`
  : mess = `Your total cost is $${total()}, which will be charged to the card ${card}.`;
  console.log(mess);
  cart = [];
}
