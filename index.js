var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let itemPrice = Math.floor(Math.random() * 101);
var itemName = {};
itemName[item] = itemPrice;
cart.push(itemName);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
let currentCart = [];
if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
for (var i in cart) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey];
      currentCart.push(`${itemKey} at \$${itemValue}`);
    }
   if (cart.length === 1) {
console.log(`In your cart, you have ${currentCart[0]}.`);
}
else if (cart.length === 2) {
console.log(`In your cart, you have ${currentCart[0]} and ${currentCart[1]}.`);
}
else if (currentCart.length > 2) {
    var endItem = currentCart.pop();
    console.log(`In your cart, you have ${currentCart.join(", ")}, and ${endItem}.`);
  }
  }
}

function total() {
var totalValue = 0;
for (var i in cart) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey];
      totalValue = totalValue + itemValue;
}
return totalValue;
}


function removeFromCart(item) {
for (let i=0; i < cart.length; i++) {
if (cart[i].hasOwnProperty(item)) {
     cart.splice(i, 1);
return cart;
  }
}
console.log("That item is not in your cart.");
return cart;
}

function placeOrder(cardNumber) {
if (cardNumber) {
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  return cart;
}
console.log("Sorry, we don't have a credit card on file for you.");
}
