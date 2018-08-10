var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = Math.floor((Math.random()*100)+1);
 
 cart.push({
    itemName:itemName,
    itemPrice:itemPrice
   });
  return `${itemName} has been added to your cart.`;
}



function viewCart() {
  var viewItem;
  if (cart.length === 0){
    viewItem = `Your shopping cart is empty.`;
    return viewItem;
  }
  viewItem = `In your cart, you have`;
  for (let i = 0; i < cart.length; i++){
    if(cart.length === 1) {
      viewItem += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
    }
    else if (i === cart.length - 1){
      viewItem += ` and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
    }
    else {
      viewItem += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
    }
  }
  return viewItem;
}



function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
    sum = sum + cart[i]['itemPrice']
  }
  return sum;
}



function removeFromCart(item) {
  var cItem;
  cart.slice(item);
  return cart;
  
}

function placeOrder(cardNumber) {
  // write your code here
}
