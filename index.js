var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]; //t = t + cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
    var i = 0;
    var cartContents = [];
    if (cart.length > 0) {
      for (i = 0; i < cart.length; i++) {
        var cartKeys = Object.keys(cart[i]);
        var item = cartKeys[0];
        var price = cart[i][item];
        cartContents.push(` ${item} at $${price}`);
        var cartList = cartContents.join();
      }
      console.log(`In your cart, you have${cartList}.`) ;
    } else {
        console.log("Your shopping cart is empty.");
    }
}

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
    cart = cart.slice(0, i).concat(cart.slice(i + 1))
    console.log(cart);
    itemInCart = true;
      }
    }
    if (itemInCart === false){
    console.log("That item is not in your cart.");
    }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    var totalResults = total();
    console.log(`Your total cost is $${totalResults}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
  console.log(cart);
}
