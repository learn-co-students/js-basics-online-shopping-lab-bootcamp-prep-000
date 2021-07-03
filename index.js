var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var add = {
   itemName: item, 
   itemPrice: Math.floor((Math.random() * 100) + 1), 
 };
  cart.push(add);
 return (`${item} has been added to your cart.`)
}

function viewCart() {
 if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  var yourCart = 'In your cart, you have ';
  for (let i = 0; i < cart.length; i++) {
    yourCart += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i === cart.length - 2) {
      yourCart += ', and ';
    } else if (i < cart.length - 2) {
      yourCart += ', '
    } else {
      yourCart += '.';
    }
  }
  return yourCart;
}

function total() {
  var cartPartial = 0;
  for (let i = 0; i < cart.length; i++) {
    cartPartial += cart[i].itemPrice;
  }
  return cartPartial;
}

function removeFromCart(item) {
  for ( let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
  return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  var cartPartial = 0;
    for (let i = 0; i < cart.length; i++) {
    cartPartial += cart[i].itemPrice;
    }
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else {
    cart.length = 0;
    return `Your total cost is $${cartPartial}, which will be charged to the card ${cardNumber}.`
  }
}
