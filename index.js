var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var forPrint = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
        forPrint += item + ' at $' + cart[i][item];
      }
      if (cart.length - 1 !== i) {
        forPrint +=", ";
      } else {
        forPrint += ".";
      }
    }
    console.log(forPrint);
  }
}

function removeFromCart(itemToBeRemoved) {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemToBeRemoved)) {
      cart.splice(i, 1);
      count++;
    }
  }
  if (count === 0) {
    console.log("That item is not in your cart.");
  } else {
    return cart;
  }
}

function placeOrder (creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}
