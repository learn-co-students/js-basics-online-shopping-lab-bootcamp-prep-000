var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var p = Math.floor(Math.random() * 100 + 1);
  cart.push({itemName: item, itemPrice: p});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartOrder = 'In your cart, you have ';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    if(cart.length >= 1) {
        cartOrder += `${cart[0].itemName} at $${cart[0].itemPrice}`;
      }
    if(cart.length >= 2) {
      var items = "";
      for (let i = 1; i < cart.length - 1; i++) {
        items += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      cartOrder += `${items}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;
    }
    }
    return `${cartOrder}.`;
  }


function total() {
var cartTotal = 0;
var	prices = [];
for (var i = 0; i < cart.length; i++) {
  prices.push(cart[i].itemPrice);
}
for (let i = 0; i < cart.length; i++) {
	cartTotal += prices[i];
}
   return(cartTotal);
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
    getCart();
    }
  }
      return ('That item is not in your cart.');
}

function placeOrder(cardNumber) {
    if (cardNumber > 0) {
      var amount = total()
    cart.shift();
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`;
    } else { 
      return 'Sorry, we don\'t have a credit card on file for you.';
}
}