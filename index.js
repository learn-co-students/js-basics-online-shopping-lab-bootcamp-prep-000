var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100)+1;
  var item = {itemName: itemName, itemPrice: itemPrice};
  cart.push(item);
 //console.log(cart);
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  else {
    var output = "In your cart, you have ";
    let value = "";
    for (var i = 0; i< cart.length; i++ ) {
      output +=  `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
      if (i === cart.length-1) {
        output += "."
      }
      else if(i===cart.length-2) {
        output += ", and "
      }
      else {
        output += ", "
      }
    }
    console.log(output);
    return output;
  }
}
function total() {
   var sum = 0;
for (var i = 0; i< cart.length; i++ ) {
  sum += cart[i]['itemPrice'];
}
return sum;
}

function removeFromCart(itemName) {
  for(var i = 0; i < cart.length; i++) {
    if (cart[i]['itemName']===itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
}
  var cost = total();
  cart = [];
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}