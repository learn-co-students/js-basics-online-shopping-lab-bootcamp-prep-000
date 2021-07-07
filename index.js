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
 var shop = {itemName: item, itemPrice: price};
 cart.push(shop);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
var item = []
var price = []
if (cart.length === 0) {
  return ("Your shopping cart is empty.")
}
else if (cart.length === 1) {
  return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
}
else if (cart.length > 1) {
  var cart2 = ('In your cart, you have')
  for (let i = 0; i < cart.length; i++) {
    if (i != cart.length - 1) {
      cart2 = cart2 + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    else if (i === cart.length - 1) {
      cart2 = cart2 + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }
  return cart2
}
}


function total() {
  var itemPrice = []
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice; 
  }
  return total
  }

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) { 
    cart.splice(i, 1);
     return cart;
    }
  }
  return "That item is not in your cart.";
  }

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
    } 
  else {
    var money = total();
    var card = cardNumber;
    cart = [];
      return `Your total cost is $${money}, which will be charged to the card ${card}.`;
    }
}
