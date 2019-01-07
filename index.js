var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)+1});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length == 0) {
    console.log("Your shopping cart is empty.");
  }

  else if (cart.length == 1 || cart.length == 2) {
    var items = [];
      for (var i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
          items.push(item + " at $" + cart[i][item])
      }
      console.log("In your cart, you have " + items.join(" and ") + ".");
    }
  }

  else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        if (i == cart.length-1) {
          items.push("and " + item + " at $" + cart[i][item])
        }

        else {
        items.push(item + " at $" + cart[i][item])
      }
    }

  }
  console.log("In your cart, you have " + items.join(", ") + ".");
}
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      sum += cart[i][item];
    }
  }
  return sum;
}

function removeFromCart(item) {
  var cartItem = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      cartItem = true;
    }
  }

  if (cartItem == false) {
    console.log("That item is not in your cart.")
  }

  return cart;

}

function placeOrder(cardNumber) {
  if(cardNumber == undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
    cart.length = 0;
  }
}
