var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor((Math.random() * 100) + 1)});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemKeys = [];
    for (var i in cart) {
      var itemKey = cart[i];
      for (var key in itemKey) {
        itemKeys.push(key + " at" + " $" + itemKey[key]);
      }
    }
    if (itemKeys.length === 1) {
      console.log("In your cart, you have " + itemKeys.join(' ') + ".");
    } else if (itemKeys.length === 2) {
      console.log("In your cart, you have " + itemKeys.slice(0, itemKeys.length - 1).join(', ') + " and " + itemKeys[itemKeys.length - 1] + ".");
    } else {
      console.log("In your cart, you have " + itemKeys.slice(0, itemKeys.length - 1).join(', ') + ", and " + itemKeys[itemKeys.length - 1] + ".");
    }
  }
}

function total() {
  var num = [];
  for (var i in cart) {
    var itemKey = cart[i];
    for (var key in itemKey) {
      num.push(itemKey[key]);
    }
  }
  var result = num.reduce(function(accum, value) {
    return accum + value;
  });
  return result;
}

function removeFromCart(item) {
  let cartItem = false;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cartItem = true;
      cart.splice(i, 1);
    }
  }
  if (cartItem === false) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
