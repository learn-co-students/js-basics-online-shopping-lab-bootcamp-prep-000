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
  // generate random number between 0-100 inclusive and set to price variable
  var price = Math.floor( Math.random() * 101 );
  // store the item parameter into item variable
  var item = item;
  // put item and price into object and assign to the itemAndPrice variable
  var itemAndPrice = { [item]: price };
  // add item and price to the cart array
  cart.push(itemAndPrice);
  // console.log item added to the cart
  console.log(item + ' has been added to your cart.');
  // return the cart
  return cart;
}

function viewCart() {

    if ( cart.length > 0 ) {
        // create a list of cart items in an array
        var list = [];
        for(var i = 0; i < cart.length; i++) {
            // grab the object keys from the cart array
            // console.log(Object.keys(cart[i]));
            var myItems = Object.keys(cart[i]);

            // push each key/value pair onto the list array
            list.push( " " + myItems + " at $" + cart[i][myItems] );

        }

        // return the list of items and prices array
        console.log('In your cart, you have' + list + ".");

    } else {
        // if cart is empty, let the shopper know
        console.log('Your shopping cart is empty.');
    }

}


function removeFromCart(itemToRemove) {


    for (var i = 0; i < cart.length; i++) {
          var itemsInCart = Object.keys(cart[i]);

          // determine if itemToRemove is actually in the cart
          if (cart[i].hasOwnProperty(itemToRemove)) {
             // console.log('remove the item');

             // remove the item from the carts array
             cart.splice(cart[i], 1);

             // return the cart array
             return cart;

          }
    }

    console.log('That item is not in your cart.')
}


function placeOrder(cc) {
    if ( cc ) {
        // charge the card
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
        // empty the cart array
        cart = [];
    } else {
        console.log("We don't have a credit card on file for you to place your order.");
    }
}
