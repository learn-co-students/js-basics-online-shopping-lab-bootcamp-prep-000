var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var price = Math.floor(Math.random() * 100) + 1;
  var obj = {itemName: item, itemPrice: price};
  cart.push(obj);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length <= 0) {
    return "Your shopping cart is empty.";

  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;

  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;

  } else {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`;

  }

}

function total() {
  // write your code here
  var pricePerItem = [];
  var totalPrice = 0;

  for (var i = 0; i < cart.length; i++) {
    var valuePrice = getCart()[i].itemPrice;
    pricePerItem.push(valuePrice);
  }

  for (var j = 0; j < pricePerItem.length; j++) {
      totalPrice = pricePerItem[j] += totalPrice;
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (getCart()[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  return cart;
}
