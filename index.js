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
 var obj = {}
 obj.itemName = item;
 // gets a random decimal between 0 and 1, multiply by 100 to get a number, and round
 obj.itemPrice = Math.floor(Math.random() * 100);
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    var myCart = [];
    for (var i=0; i<cart.length; i++) {
      //if there is more than 1 item and it is the last item, add "and"
      if (i+1 === cart.length && cart.length != 1) {
        myCart.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      else {
        myCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
    }
    return `In your cart, you have ${myCart.join(', ')}.`;
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var money = total();
    cart = [];
    return `Your total cost is $${money}, which will be charged to the card ${cardNumber}.`
  }
}
