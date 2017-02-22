var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.unshift({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartContents = [];
    for (var i = 0, l = cart.length; i < l; i++) {
      cartContents.unshift( " " + Object.keys(cart[i]) + " at $",
      cart[i][Object.keys(cart[i])])
    } //close for loop
  } //close else statement
  console.log("In your cart, you have" + cartContents + ".");
}

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

function removeFromCart(itemToRemove) {
    // loop through the cart array
    for (var i = 0, l = cart.length; i < l; i++) {
      if ( cart[i].hasOwnProperty(itemToRemove) ) {
        cart.splice(i, 1);
      } else {}
    }
      var updatedLength = cart.length
      if ( l === updatedLength || l === 0 ) {
        console.log('That item is not in your cart.')
      } else {}
  return cart
}

function placeOrder(creditCardNumber) {
    if ( !creditCardNumber ) {
      console.log('We don\'t have a credit card on file for you to place your order.');
    } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    }
    cart = [];
}
