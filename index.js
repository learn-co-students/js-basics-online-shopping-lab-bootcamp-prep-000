var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myObject = new Object();
  myObject.itemName = item;
  myObject.itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
  cart.push(myObject);
  return `${myObject.itemName} has been added to your cart.`;
  
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    let i = cart.length;
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
      }
  }

function total() {
  var total = 0;
  var i = 0;
  do {
    total = total + cart[i].itemPrice;
    i = i + 1;
  }
  while (i < cart.length);
  return total;
}

function removeFromCart(item) {
  let item1 = cart.find(n => n.itemName === item);
  if (item1 !== undefined) {
    var i = cart.indexOf(item1); 
    cart.splice(i, 1);
  }
  else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let grandTotal = total();
    cart = [];
    return `Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
