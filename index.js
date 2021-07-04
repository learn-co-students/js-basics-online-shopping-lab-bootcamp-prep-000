var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var newObject = {itemName: item, itemPrice: price};
 cart.push(newObject);
 return `${item} has been added to your cart.`
}


function viewCart() {
  var str = "In your cart, you have ";
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
    
  } else if (cart.length === 1) {
    str = str + `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
    return str;
    
  } else {
    for (var i = 0; i < cart.length - 1; i++) {
      str = str + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `;
    }
    str = str + `and ${cart[cart.length - 1]['itemName']} at $${cart[cart.length - 1]['itemPrice']}.`;
    return str;
  }
}


function total() {
  var tot = 0;
  for (var i = 0; i < cart.length; i++) {
    tot = tot + cart[i]['itemPrice'];
  }
  return tot;
}


function removeFromCart(item) {
  for (var i = 0; i<cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}


function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var tot = total();
    cart.splice(0);
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
  }
}