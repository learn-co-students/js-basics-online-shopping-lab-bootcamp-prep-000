var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart[cart.length] = new Object({[item]:Math.floor(Math.random()*100 + 1)})
  var string = "";
  console.log("" + item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var string = "";
  if (cart.length === 0) {
    string = "Your shopping cart is empty.";
  }
  else {
    string = 'In your cart, you have ';
  }
  if (cart.length === 1) {
    for (var imet in cart[0]) {
      string += "" + imet +  " at \$" + cart[0][imet] + ".";
    }

  }
  else if (cart.length === 2) {
    for (var imet in cart[0]) {
      string += "" + imet + " at \$" + cart[0][imet] + ' and ';
    }
    for (var imet in cart[1]) {
      string += "" + imet +  " at \$" + cart[1][imet] + ".";
    }
  }
  else if (cart.length > 2) {
    for (var i = 0; i < cart.length-1; i++) {
      for (var imet in cart[i]) {
        string += "" + imet + " at \$" + cart[i][imet] + ', ';
      }
    }
    for (var imet in cart[cart.length-1]) {
      string += "and " + imet +  " at \$" + cart[cart.length-1][imet] + ".";
    }
  }
  console.log(string);
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var j in cart[i]) {
      sum += cart[i][j];
    }
  }
  return sum;
}

function removeFromCart(item) {
  var inCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      inCart = true;
      cart.splice(i, 1);
      return cart;
    }
  }
  if (!inCart) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    var val = "Your total cost is \$" + total() +
    ", which will be charged to the card " + cardNumber + ".";
    cart = [];
    console.log(val);
  }
}
