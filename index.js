var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj[item] = Math.floor(Math.random() * 100) + 1;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let i = 0;
  let obj, obj0, obj1;
  let cartstr = '';
  if (cart.length > 0) {
  }
    obj0 = cart[0];
    obj1 = cart[1];
    switch (cart.length) {
      case 0 :
        cartstr += ('Your shopping cart is empty.');
        break;
      case 1 :
        cartstr += (`In your cart, you have ${Object.keys(cart[0])} at $${obj0[Object.keys(cart[0])[0]]}.`);
        break;
      case 2 :
        cartstr += (`In your cart, you have ${Object.keys(cart[0])} at $${obj0[Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])} at $${obj1[Object.keys(cart[1])[0]]}.`);
        break;
      default:
        cartstr += ('In your cart, you have');
        while (cart[i] != undefined) {
          obj = cart[i];
          if (cart[i+1]) {
            cartstr += (` ${Object.keys(cart[i])} at $${obj[Object.keys(cart[i])[0]]},`);
          } else {
            cartstr += (` and ${Object.keys(cart[i])} at $${obj[Object.keys(cart[i])[0]]}.`);
          }
        i++;
      }
    }
  console.log(cartstr);
}

function total() {
  let total = 0;
  let i = 0;
  while (cart[i] ) {
    total += parseInt(cart[i][Object.keys(cart[i])[0]]);
    i++;
  }
  return total;
}

function removeFromCart(item) {
  let i = 0;
  let present = false;
  while (cart[i]) {
    if (cart[i].hasOwnProperty(item)) {
      present = true;
      cart = cart.slice(0,i).concat(cart.slice(i+1));
    }
  i++;
  }
  if (!present) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
