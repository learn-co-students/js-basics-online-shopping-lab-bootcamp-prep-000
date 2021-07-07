var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push(Object.assign({},{ itemName: item, itemPrice: price }));
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length > 1) {
    var strStart = [];
    for (var i = 0; i < cart.length - 1; i++) {
      strStart.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
    }
    var strEnd = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;
    return `In your cart, you have ${strStart.join("")}and ${strEnd}.`;
  }
}

function total() {
  var totalCost = 0;
  for (var i=0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  var bool = 0;
  for (var i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      bool = 1;
      return cart; 
    }
  }
  if (bool === 0) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return str;
  }
}
