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
  var currentItem = {};
  var price = Math.floor(Math.random() * 101);
  currentItem[item] = price;
  cart.push(currentItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var items = "In your cart, you have ";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  for (let i = 0; i < cart.length; i++) {
  	for (var value in cart[i]) {
      items += `${value} at $${cart[i][value]}${i === cart.length - 1? "." : ", "}`;
  	}
  }
  console.log(items);
}

function removeFromCart(item) {
  var match = false;
  for (let i = 0; i < cart.length; i++) {
    for (var name in cart[i]) {
      if (name === item) {
      	cart.splice(i, 1);
        match = true;
      }
    }
  }
  if (!match) {
    console.log("That item is not in your cart.");
  } else {
    console.log(`The item ${item} has been removed from your cart.`);
  }
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
  cart.length = 0;
}
