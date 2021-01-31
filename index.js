var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var price = Math.floor(Math.random()*100) + 1;
 var itemPrice = price;
 var itemWithPrice = {itemName, itemPrice};
 cart.push(itemWithPrice);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartMessage = "";
  var price = [];
  var item = [];
  var itemWithPrice;
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    itemWithPrice = cart[0];
    item = Object.values(itemWithPrice)[0];
    price = Object.values(itemWithPrice)[1];
    cartMessage = `In your cart, you have ${item} at $${price}.`;
    return cartMessage;
  }
  else {
    cartMessage = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      itemWithPrice = cart[i];
      item = Object.values(itemWithPrice)[0];
      price = Object.values(itemWithPrice)[1];
      if (i === cart.length-1) {
        cartMessage += `and ${item} at $${price}.`;
      }
      else {
        cartMessage += `${item} at $${price}, `;
      }
    }
    return cartMessage;
  }
}

function total() {
  var itemWithPrice;
  var price = [];
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    itemWithPrice = cart[i];
    price = Object.values(itemWithPrice)[1];
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  var itemWithPrice;
  var itemName = [];
  var i = 0;
  while (i < cart.length) {
    itemWithPrice = cart[i];
    itemName = Object.values(itemWithPrice)[0];
    if (itemName === item) {
      cart.splice(1, i);
      i = cart.length;
      return cart;
    }
    else {
      i++;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var orderMessage = "";
  if (cardNumber === undefined) {
    orderMessage = "Sorry, we don't have a credit card on file for you.";
  }
  else {
    orderMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
  cart = [];
  return orderMessage;
}
