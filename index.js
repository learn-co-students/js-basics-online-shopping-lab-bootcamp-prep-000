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
  cart = [...cart, {[item]: price}];
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length;
  if (!l) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var itemList = `In your cart, you have`;
    for (let i = 0; i < l; i++) {
      for (var item in cart[i]) {
        itemList = `${itemList} ${item} at $${cart[i][item]}${i === l - 1 ? "." : ","}`;
        }
      }
    console.log(itemList);
  }
}

function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)];
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(number) {
  if (!number) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart = [];
  }
}
