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
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var items = [];
  // check if cart is not empty with if statement
  if (cart.length > 0) {
    // for each item in cart
    for (var i = 0; i < cart.length; i++) {
    // get object keys
    var cartItems = Object.keys(cart[i])
    // append cartItems to newArray
    items.push(` ${cartItems} at ${cart[i][cartItems]}`)
  }
  console.log('In your cart, you have' + items + '.')
}
  // log empty cart with else statement
  else {
    console.log("Your shopping cart is empty.")
  }
}

/*
function removeFromCart(item) {
  // iterate over cart items with for
  for (let i = 0; i < cart.length; i++) {
    // declare if condition to check for item 
    if (cart[i].hasOwnProperty(item)) {
      // destructively remove item if present
      cart.shift(item)
    }
    // else statement declaring item is absent
    else {
      console.log("That item is not in your cart.")
    }
  }
    // return contents of cart
    return cart;
} */

// the following code was suggested by Artmour on learnslackers.slack.com
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

function placeOrder(creditCardNumber) {
    return 'true'
}