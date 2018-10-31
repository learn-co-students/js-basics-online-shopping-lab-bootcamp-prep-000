var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemObject = {
    itemName: itemName,
    itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(itemObject);

  return (`${itemName} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var itemString = `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}`;

  for (let i = 1; i < cart.length; i++) {
    if(cart.length > 1 && i === cart.length - 1) {
       itemString =  itemString + (", and " + cart[i]["itemName"] + " at $" + cart[i]["itemPrice"]);
    } else {
      itemString =  itemString + (", " + cart[i]["itemName"] + " at $" + cart[i]["itemPrice"]);
    }
  }

  itemString += ".";
  return itemString;
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i]["itemPrice"];
    }

  return sum;
}

function removeFromCart(item) {
  for (var i = 0; cart.length > i; i++) {
    if (cart[i]["itemName"] === item) {
      cart.splice(i, 1);
      return cart;
    }
  }

  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }

  var totalCost = total();
  for (var i = 0; cart.length > i; i++) {
    var itemName = cart[i]["itemName"];
    removeFromCart(itemName);
  }

  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}
