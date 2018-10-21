var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newitem = {itemName:item, itemPrice: Math.floor(Math.random() * 100)};
  cart.push(newitem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length > 1) {
    var part1 = 'In your cart, you have ';
    var part2 = '';
    for(var i = 0; i < cart.length-1; i++) {
      part2 = part2 + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    return part1 + part2 + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else
  {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(var i = 0; i< cart.length; i++) {
    if(cart[i].itemName == item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var ordertotal = total();
    cart = [];
    return `Your total cost is $${ordertotal}, which will be charged to the card ${cardNumber}.`;
  }
}