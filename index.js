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
  return cart

}

function addToCart(item) {

var price = (Math.floor(Math.random() * 101));
cart.push({item: price});

console.log(`${item} has been added to your cart.`)
return cart

}

function viewCart () {

  if (cart.length > 0) {

    var fullCart = '';

    for (var i = 0, l = cart.length; i < l; i++) {
      for (var price in cart[i]) {
        var item = cart[price];
        fullCart += (`${item} at $${cart[i][price]}, `)
      }
    }

  var removeSpace = fullCart.slice(0, -1);
  var removeComma = removeSpace.slice(0, -1);
  var finalCart = (`In your cart, you have ${removeComma}.`);
  console.log(finalCart)

} else {

  console.log('Your shopping cart is empty.')

}

}
