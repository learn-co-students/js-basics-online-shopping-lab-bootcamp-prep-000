var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * (100 - 1));
  cart.push({itemName:[item], itemPrice: price});
return `${item} has been added to your cart.`;
} 

function viewCart() {
  let string = 'In your cart, you have ';
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    string += `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
    return string;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
      string += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      } else {
      string += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `;
    }
  }
  return string;
 }
}

function total() {
  let total = itemPrice + 0;
  for (var i = 0; i < cart.length; i++) {
    let grandTotal = cart[i].itemsName + cart[i].itemPrice;
   return grandTotal; 
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
