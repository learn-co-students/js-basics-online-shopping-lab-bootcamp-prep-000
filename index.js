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
    var itemPrice = Math.random();
    itemPrice * 100;
    Math.floor(itemPrice);
    cart.push({[item]: itemPrice});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
  var inCart = [];
  var cart = getCart();
  if ( cart.length === 0) {
      console.log("Your shopping cart is empty.");
      return cart;
  } else {
    for (var i = 0, l = cart.length; i < l; i++) {
        var item = Object.keys(cart[i]);
        inCart.push(`${item} at $${cart[i][item]}`);
    }
  }
      console.log("In your cart, you have " + inCart.join(", ") + ".");
      return cart;
}
function removeFromCart(remove) {
   var cart = getCart();
   for (var i = 0; i < cart.length; i++) {
      var torf = cart[i].hasOwnProperty(remove);
      if (torf === true) {
        cart.splice( i , 1 );
      }
   }
   console.log("That item is not in your cart.");
   return cart;
}
function placeOrder(n) {
      if ( n === undefined) {
        console.log("We don't have a credit card on file for you to place your order.");
      } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`);
      }
      setCart([]);
}
