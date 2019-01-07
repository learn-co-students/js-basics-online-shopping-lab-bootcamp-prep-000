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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100 * Math.random());
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else {
    const itemPrice = [];
    for (let i = 0; i < cart.length; i++) {
      var cartObject = cart[i];
      var item = Object.keys(cartObject)[0];
      var price = cartObject[item];
      itemPrice.push(`${item} at $${price}`);
    }
      console.log(`In your cart, you have ${itemPrice.join(', ')}.`);
    }
  }

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      return cart.splice(i, 1);
    }
  }
   console.log("That item is not in your cart.");
 }

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = false;
  }
}
