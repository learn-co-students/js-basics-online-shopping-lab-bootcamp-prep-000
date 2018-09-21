var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)});
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  } else if (cart.length > 1) {
    var string = '';
    for(var i=0; i < cart.length - 1; i++) {
      string += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
    }
    string += `and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`
    return `In your cart, you have ${string}`
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i=0; i<cart.length; i++) {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
    var counter = 0;
    var sum = 0;

    while(counter < cart.length){
    if(cart[counter]['itemName'] !== item) {
      counter++;
    } else if (cart[counter]['itemName'] === item) {
      cart.splice(counter, 1);
      return cart;
    }
  }
  for (var i=0; i < cart.length; i++){
    if (cart[i]['itemName'] === item) {
      sum += 10
    }
  }
  if(sum < 10){
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else if (cardNumber) {
    var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return string
  }
}
