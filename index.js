var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function getCart() {
  return cart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function addToCart (item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var itemObject = {[item]: itemPrice};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart () {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {

    var cartDescrip = "In your cart, you have ";

    for (let i = 0; i < cart.length; i++) {
      var obj = cart[i];
      for (var prop in obj) {
        cartDescrip += `${prop} at $${obj[prop]}${i === cart.length - 1 ? "." : ", "}`;
      }
    }
    console.log(cartDescrip);
  }
}

function removeFromCart (item) {
  for (let i = 0; i < cart.length; i++) {
    for (var prop in cart[i]) {
      if (prop === item) {
        cart.splice(i, 1);
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder (card) {
  if (card) {
      var t = total();
      console.log(`Your total cost is $${t}, which will be charged to the card ${card}.`);
      cart.length = 0;
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }

}
