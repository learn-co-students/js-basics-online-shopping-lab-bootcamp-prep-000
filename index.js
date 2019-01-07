var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let val = Math.floor(Math.random() * 100);
  cart.push({[item]: val});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  let mess = "In your cart, you have";
  for(let i = 0; i < cart.length; i++) {
    if(i > 0 && i === cart.length - 1) {
      mess += " and";
    }
    mess += ` ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`;
    if (i < cart.length - 1 && cart.length > 2) {
      mess += ',';
    }
  }
  mess += '.';
  console.log(mess);
  return cart;
}

function total() {
  let tot = 0;
  for(let i = 0; i < cart.length; i++) {
    tot += Object.values(cart[i])[0];
  }
  return tot;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(Object.keys(cart[i])[0] === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
  let val = total();
  console.log(`Your total cost is $${val}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}


