var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var item = { itemName: name, itemPrice: ((Math.floor(Math.random() * (101 - 1)) + 1))};
  cart.push(item);
  return `${name} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " " + "at" + " " + "$" + cart[0].itemPrice + ".";
  } else if (cart.length === 2) {
    return "In your cart, you have " + cart[0].itemName + " " + "at" + " " + "$" + cart[0].itemPrice + ", and" + " " + cart[1].itemName + " " + "at" + " " + "$" + cart[1].itemPrice + ".";
  } else {
    var totalItems = [];
      var i = 0;
      for (let i = 0; i < cart.length; i++) {
        if (i != cart.length-1) {
          totalItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
        } else {
          totalItems.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      }
    } return "In your cart, you have " + totalItems.join(", ");
  }
}


function total() {
  var totalPrice = 0;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice;
  } return totalPrice;
}

function removeFromCart(item) {
    var i = 0;
    for (i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item) {
        cart.splice(i, 1);
        return cart;
      } 
  } return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
