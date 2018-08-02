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
  var addItem = {'itemName': item, 'itemPrice': price};
  cart.push(addItem);
  return `${item} has been added to your cart.`;
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
    var a = `In your cart, you have `;
    for (var i = 0; i < cart.length -1; i++) {
      if (i === 0) {
      var b = `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    } 
    else {
    var b = b + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    var c = `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    }
  return a + b + c;
  }
}

function total() {
  var totalCost = 0;
  for(let i = 0; i < cart.length; i++) {
  totalCost += cart[i].itemPrice;
  }
return totalCost;
}

function removeFromCart(item) {
  var cart = getCart();
  for (let i=0; i < cart.length; i++) {
    if (cart[i].itemName === item ) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var totalCost = total();
  if (cardNumber) {
    cart.length = 0;
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
