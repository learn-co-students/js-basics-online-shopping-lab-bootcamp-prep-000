var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(awesomeItem) {
  var price = Math.floor(Math.random() * 100);
  var priceAndItem = { [awesomeItem]: price};
  cart.push(priceAndItem);
  console.log(`${awesomeItem} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var cartInventory = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      for (var awesomeThing in item) {
        cartInventory += ` ${awesomeThing} at $${item[awesomeThing]},`
      } // individual item loop
    } // cart array loop
    console.log(cartInventory.slice(0,-1) + ".") //Switch last comma for a period

  } // end if statememnt
  else {
    console.log("Your shopping cart is empty.")
  }
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

function removeFromCart(uncompellingThing) {
  var itemsInCart = cart.length

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(uncompellingThing)) {
      cart.splice(i, 1);
        }
  }
  if (itemsInCart === cart.length) {
    console.log("That item is not in your cart.")
  }
  else {
    return cart;
  }
}

function placeOrder(ccNumber) {
  if (ccNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart = []
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
