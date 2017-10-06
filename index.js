var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var cart = [];
function getCart() { return cart; }
function setCart(c) { cart = c; return cart; }



function addToCart(itemName){
  var item = {};
  var price = Math.floor(Math.random() * 100);
  item[itemName] = price;
  cart.push(item);
  console.log (`${itemName} has been added to your cart.`);
  return cart;

}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
    return;
  }

  var result = 'In your cart, you have';

  for ( var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i])[0];
    var price = cart[i][name];

    if (cart.length == 1) {
      // Just one element.
      result += ` ${name} at $${price}.`;
    } else if (i === (cart.length - 1)) {
      // The last element
      result += ` and ${name} at $${price}.`;
    } else if (i === (cart.length - 1)|| (cart.length === 2)) {
      result += ` ${name} at $${price}`;
    } else {
      // Not the last element
      result += ` ${name} at $${price},`;
    }
  }

console.log (result);
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i])[0];
    var price = cart[i][name];
    totalPrice = totalPrice + price;
  }
  return totalPrice;
}

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(itemName)) {
     delete cart.splice([i], 1);
     return cart;
   }
  }
  console.log ("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log ("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  return cart;
}
