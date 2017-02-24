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
  return cart
}

function addToCart(item) {
  var itemToBuy = {}
  var price = Math.floor(Math.random() * 100);
  itemToBuy[item] = price;
  cart.push(itemToBuy);
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var inCart = [];
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        inCart.push(`${key} at $${cart[i][key]}`);
      }
    }
    var productAndPrice = inCart.join(", ");
    console.log(`In your cart, you have ${productAndPrice}.`);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        cart.splice(i, 1);
        console.log(item + " has been removed from your cart.");
        return cart;
      } 
    }
  }
  console.log("That item is not in your cart.");
}


function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
