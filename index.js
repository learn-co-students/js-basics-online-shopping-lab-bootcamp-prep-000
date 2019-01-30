var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
var x = {
  itemName: item,
  itemPrice: price
};
  cart.push(x);
  return `${x.itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  
  var stringy = 'In your cart, you have '
  
  if(cart.length === 1) {
       stringy += `${cart[0].itemName} at $${cart[0].itemPrice}.`
       return stringy;
    } else if(cart.length > 1) {
      for(let i = 0; i < cart.length; i++) {
      if(i < cart.length-1) {
        stringy += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
        stringy += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        return stringy
    }
    }
}
}

function total() {
 let sum = 0;
 for(let i = 0; i < cart.length; i++) {
    sum += parseInt(cart[i].itemPrice);
  } return sum
}

function removeFromCart(item) {
    for(let i = 0; i < cart.length; i++) {
    if(item === cart[i]["itemName"]) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}
 

function placeOrder(cardNumber) {
var cartBU;
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cartBU = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return cartBU;
  }
  
}