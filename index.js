var cart = [];
function setCart(cart) {


}

function getCart () { // this is the first function //

  return cart;
}

function addToCart (item) {

  var price = Math.floor(Math.random() * 100);

  cart.push({item:price});

  console.log(`${item} has been added to your cart.`)

  return cart;
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





function viewCart() {
    var array = [];
    if (cart.length===0) {
    console.log("Your shopping cart is empty.");
    }

    for (var i = 0; i < cart.length ; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)[0]
    var price = itemAndPrice[item]

    array.push(`${item} at \$${price}`)

  }

  console.log(`In your cart, you have ${array.join(', ')}.`);
}
