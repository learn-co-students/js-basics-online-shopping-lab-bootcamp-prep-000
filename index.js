var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item,itemPrice:Math.floor((Math.random() * 100) + 1)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var i = 1;
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var output = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    while (i<cart.length-1) {
      output = `${output}, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      i++;
    }
    return `${output}, and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
}

function total() {
  var i = 0;
  var total = 0;
  while (i<cart.length) {
    total = total + cart[i].itemPrice;
    i++;
  }
  return total;
}

function removeFromCart(item) {
  var i = 0;
  var present = false
  while (i<cart.length) {
    if (cart[i].itemName === item) {
      present = true;
      cart.splice(i,1);
    }
    i++;
  }
  if (present === true) {
    return cart;
  } else {
    return `That item is not in your cart.`;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
