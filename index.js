var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var tmp = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * (101 - 1 + 1)) + 1
 };
 cart.push(tmp);
 return item + " has been added to your cart.";
}

function viewCart() {
  var i = 0;
  var tmp = "In your cart, you have ";
  
  if (cart.length === 0) return "Your shopping cart is empty.";
    else if (cart.length === 1) {
      tmp += cart[i].itemName + " at $" + cart[i].itemPrice + ".";
    } else {
        while(i < cart.length) {
          if (i === cart.length - 1) tmp += "and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
          else  tmp += cart[i].itemName + " at $" + cart[i].itemPrice + ", ";
          i++;
        }
    }
  return tmp;
}

function total() {
  var i = 0;
  var sum = 0;
  
  while(i < cart.length) {
    sum += cart[i].itemPrice;
    i++;
  }
  return sum;
}

function removeFromCart(item) {
  var i = 0;
  var wasItem = false;
  
  while(i < cart.length) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      wasItem = true;
    } else {
      i++;
    }
  }
  
  if (wasItem === false) {
    return "That item is not in your cart.";
  } else return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var sum = total();
    cart = [];
    return "Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + ".";
  }
}
