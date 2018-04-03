var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 };
 getCart().push(item);
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  if (getCart().length === 0) {
    return "Your shopping cart is empty.";
  } else if (getCart().length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (getCart().length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else {
    var i = 0;
    var statement = "In your cart, you have ";
    for (i; i < getCart().length; i = i+1) {
      
      if (i === getCart().length-1) {
        statement = statement + `and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
      } else {
        statement = statement + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
      }

    }
    return statement
  }
}

function total() {
  var i = 0;
  var total = 0;
  for (i; i < getCart().length; i = i+1) {
    total = total + getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var i = 0;
  for (i; i < getCart().length; i = i+1) {
    if (getCart()[i].itemName === item) {
      getCart().splice(i, 1)
      return getCart();
    }
  }
  return "That item is not in your cart.";
  
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cost = total();
    setCart([]);
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}
