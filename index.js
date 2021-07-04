var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random()*99)
cart.push(new Object({itemName: item, itemPrice: price}))
return (`${item} has been added to your cart.`)
}

function viewCart() {
  var inCart = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    for (let i=0; i < cart.length; i++) {
      if (i === 0) {
        inCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      } else if (i < cart.length-1 && i > 0) {
        inCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      } else if ( i == cart.length-1) {
        inCart.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
    }
    return `In your cart, you have ${inCart}.`;
  }
}

function total() {
  var sum = 0
  for (let i=0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum;
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart;
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  var amount = total();
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`;
  }
}