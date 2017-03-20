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

  return t;
}

function getCart() {


  return cart;
}

function addToCart(item) {


  getCart().push({[item]: Math.floor(Math.random() * 10)});
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {


  if (cart.length > 0) {
  var statement = "In your cart, you have";
  var item;
  for (var i = 0; i < cart.length ; i++){

    item = Object.keys(cart[i]);
    statement += ` ${item} at $${cart[i][item]}${(cart.length - 1 ) > i ? "," : "."}`;

      }

  
      console.log(statement);

    } else {

  console.log("Your shopping cart is empty.");

  }

}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart;
    }
  }
     console.log("That item is not in your cart.");
}


function placeOrder(cardNumber) {

  if (cardNumber > 0) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  //  for (var i = 0; i < cart.length ; i++) {
       cart.splice(0, cart.length);
  //  }
  }

    console.log("We don\'t have a credit card on file for you to place your order.");
}
