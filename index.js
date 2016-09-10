var cart;
cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(itm) {
  const price = Math.floor(Math.random() * 100);
  cart.push({[itm] : price});
  console.log(`${itm} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if(!cart.length) {
    return console.log('Your shopping cart is empty.');
  }
  const itmsPrcs = [];

  for (let i =0; i < cart.length; i++) {
    let itmPrc = cart[i];
    let itm = Object.keys(itmPrc)[0];
    let prc =itmPrc[itm];

    itmsPrcs.push(`${itm} at \$${prc}`);
  }

  console.log(`In your cart, you have ${itmsPrcs.join(', ')}.`);
}

function removeFromCart(itm) {
  let itmInCrt = false;

  for(let i =0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(itm)) {
      itmInCrt = true;
      cart = cart.slice(0,i).concat(cart.slice(i+1));
    }
  }

  if(!itmInCrt) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cCard) {
  if(!cCard) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cCard}.`);
  cart = [];
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
