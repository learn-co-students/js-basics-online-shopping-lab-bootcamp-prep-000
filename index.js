var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]:Math.floor((Math.random() * 100) + 1)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var result = "";

  if (cart.length === 0){
    result = "Your shopping cart is empty."
  }else {
    result = "In your cart, you have";
    var currentCar = Object.keys(cart[0])[0];
    result += ` ${currentCar} at $${cart[0][currentCar]}`;
    if (cart.length === 1){
      result += ".";
    }else if (cart.length === 2){
      var currentCar = Object.keys(cart[1])[0];
      result += ` and ${currentCar} at $${cart[1][currentCar]}.`;
    }else {
      result += ",";
      for (var i = 1; i < cart.length - 1; i++) {
        currentCar = Object.keys(cart[i])[0];
        result += ` ${currentCar} at $${cart[i][currentCar]},`;
      }
      currentCar = Object.keys(cart[cart.length - 1])[0];
      result += ` and ${currentCar} at $${cart[cart.length - 1][currentCar]}.`;
    }
  }

  console.log(result);
}

function total() {
  var result = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var price in cart[i]) {
      result += cart[i][price];
    }
  }

  return result;
}

function removeFromCart(item) {
  var indexToRemove = -1;

  for (var i = 0, l = cart.length; i < l; i++) {
    if (Object.keys(cart[i])[0] === item){
      indexToRemove = i;
      break;
    }
  }

  if (indexToRemove != -1) {
    cart.splice(indexToRemove, 1);
  }else {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber != null){
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
