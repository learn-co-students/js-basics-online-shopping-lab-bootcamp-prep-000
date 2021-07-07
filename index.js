var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cost = x => Math.floor(Math.random() * 100) + 1
 var newItem = {
   itemName : item,
   itemPrice : cost()
 }
 cart.push(newItem);
 return item + " has been added to your cart."
}

function viewCart() {
  var list = ("In your cart, you have");
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    return (list + (` ${cart[0].itemName} at $` + cart[0].itemPrice + "."));
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        return (list + (` and ${cart[i].itemName} at $` + cart[i].itemPrice + "."));
      }
      else {
        list = (list + ` ${cart[i].itemName} at $` + cart[i].itemPrice + ",");
      }
    }
  }
}

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  var finalTotal = total();
  if (cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.");
  }
  else {
    cart.splice(0, cart.length);
    return ("Your total cost is $" + finalTotal + `, which will be charged to the card ${cardNumber}.`);
  }
}
