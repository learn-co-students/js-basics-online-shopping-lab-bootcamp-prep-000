var cart;

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  console.log(`${item} has been added to your cart.`)
  cart.push({item: woordwaarde(item)})
  return cart
}

function getCart() {
  return cart
}

function viewCart() {
  // var cart = getCart()
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.')
    return
  }
  var cartContents = ''
  var cartLength = cart.length
  for (var key in cart) {
    cartContents += `${cart[key]} at $${cart[key].price}`
    cartLength--
    if (cartLength < 1) {
      cartContents += '.'
    } else {
      cartContents += ', '
    }
  }
  console.log(`In your cart, you have ${cartContents}`)
}

function total() {
  var cart = getCart()
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function woordwaarde(query) {
  var queryNumbers = new Array(query.length);
  // var vert = 150;
  // var hor = 10;
  for (i = 0; i < query.length; i++) {
      queryNumbers[i] = Number(query.charCodeAt(i) != 32 ? query.charCodeAt(i) - 64 : 0);
      // ctx.fillText(query.charCodeAt(i) != 32 ? query.charCodeAt(i) - 64 : 0, i * 1 + hor, vert);
      // hor += 45;
  }
  for (var key in queryNumbers) {
      woordwaarde += parseInt(queryNumbers[key]);
  }

  // var debug = 175;
  while (woordwaarde > 9) {
      // ctx.fillText(woordwaarde, 10, debug += 35);
      var newWoordwaarde = Number(0);
      for (j = 0; j < woordwaarde.toString().length; j++) {
          newWoordwaarde += Number(woordwaarde.toString().charAt(j));
      }
      woordwaarde = newWoordwaarde;
  }

  return woordwaarde
}
