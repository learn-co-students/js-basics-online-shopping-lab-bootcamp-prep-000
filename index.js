var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
const price = Math.floor(Math.random() * (100 - 1));
cart.push({[item]:price});
console.log(`${item} has been added to your cart.`);
return cart;
} 

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 0) {
      return "Your shopping cart is empty."
    } else if (cart.length === 1) {
      return `In your cart, you have ${cart[0]} at ${price[0]}.`
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0]} at ${price[0]}, and ${cart[1]} at ${price[1]}.`
    } else {
      return `In your cart, you have ${cart[0]} at ${price[0]}, ${cart[1]} at ${price[1]}, and ${cart[2]} at ${price[2]}.`
    }
  }
}

function total() {
  let t = 0;
  for (var i = 0; i < cart.length; i++) {
    t += cart[i][item];
  }
  return t;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1);
    } else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you."
  } else {
    console.log(cart);
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}




