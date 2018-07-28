var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({itemName: item , itemPrice : price});
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0) {
  return("Your shopping cart is empty.");
} else if (cart.length === 1) {
  return(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
} else if (cart.length === 2) {
  return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`);
} else if (cart.length === 3); {
  return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`);
}
}

function total() {
 var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
  totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  var i = 0;
  for (i = 0; i < cart.length; i++){
  if (cart[i].itemName == item) {
    cart.splice(i, 1);
  return cart;
  }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    return (`Sorry, we don't have a credit card on file for you.`);
  } else {
    var charge = total()
    cart.splice(0, cart.length);
  return (`Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`)
}
}
