var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(100 * Math.random());
  var nameAndPrice = {};
  nameAndPrice.itemName = item;
  nameAndPrice.itemPrice = price;
  cart.push(nameAndPrice);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var cartAsStringArray =[];
    for (var i = 0; i < cart.length; i++) {
      cartAsStringArray[i] = `${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}`;
    }
    if (cartAsStringArray.length === 1) {
      return `In your cart, you have ${cartAsStringArray[0]}.`;
    } else if (cartAsStringArray.length === 2) {
      return `In your cart, you have ${cartAsStringArray[0]}, and ${cartAsStringArray[1]}.`;
    } else {
      var cartWithoutLastItem = cartAsStringArray.slice(0,cartAsStringArray.length-1);
      var cartWithoutLastItemAsString = cartWithoutLastItem.join(", ");
      return `In your cart, you have ${cartWithoutLastItemAsString}, and ${cartAsStringArray[cartAsStringArray.length-1]}.`;
    }
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += Object.values(cart[i])[1];
  }
  return sum;
}

function removeFromCart(item) {
  var originalLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (Object.values(cart[i])[0] === item) {
      cart.splice(i,1);
    }
  }
  var revisedLength = cart.length;
  if (originalLength === revisedLength) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return("Sorry, we don't have a credit card on file for you.");
  } else {
    var totalPayment = total();
    cart = [];
    return (`Your total cost is $${totalPayment}, which will be charged to the card ${cardNumber}.`);
  }
}
