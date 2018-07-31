var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = {
    itemName: `${item}`, 
    itemPrice: Math.floor(Math.random()*100)
  };
  cart.push(object);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var index = 0;
    var message = [];
    while (index < cart.length) {
      if (index === cart.length-1) {
        message.push(` and ${cart[index].itemName} at $${cart[index].itemPrice}`);
        index++;
      } else {
        message.push(` ${cart[index].itemName} at $${cart[index].itemPrice}`);
        index++;
    } 
  }
  return `In your cart, you have${message}.`;
  }
}

function total() {
  var index = 0;
  var totalValue = 0;
  while (index < cart.length) {
    totalValue+=cart[index].itemPrice;
    index++;
  }
  return totalValue;
}

function removeFromCart(item) {
  var index = 0;
  while (index < cart.length) {
    if (`${cart[index].itemName}` === item) {
      cart.splice(index, 1);
      return cart;
    } else {
      index++;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var shoppingCartTotal = total();
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${shoppingCartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}