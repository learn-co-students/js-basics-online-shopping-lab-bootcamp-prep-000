var cart = []

function setCart(newCart) {
  cart = newCart;
}

function woordwaarde(query) {
  var queryNumbers = new Array(query.length);
  let woordwaarde = 0
  // var vert = 150;
  // var hor = 10;
  for (let i = 0; i < query.length; i++) {
      queryNumbers[i] = Number(query.charCodeAt(i) != 32 ? query.charCodeAt(i) - 64 : 0);
      // ctx.fillText(query.charCodeAt(i) != 32 ? query.h(i) - 64 : 0, i * 1 + hor, vert);
      // hor += 45;
  }
  for (var key in queryNumbers) {
      woordwaarde += parseInt(queryNumbers[key]);
  }

  // var debug = 175;
  while (woordwaarde > 9) {
      // ctx.fillText(woordwaarde, 10, debug += 35);
      var newWoordwaarde = Number(0);
      for (let j = 0; j < woordwaarde.toString().length; j++) {
          newWoordwaarde += Number(woordwaarde.toString().charAt(j));
      }
      woordwaarde = newWoordwaarde;
  }

  return woordwaarde
}

function addToCart(item) {
  console.log(`${item} has been added to your cart.`)
  let preItem = {[item]: woordwaarde(item)}
  cart.push(preItem)
  return cart
}

function getCart() {
  return cart
}

function viewCart() {
  var cart = getCart()
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.')
    return
  }
  var cartContents = ''
  var cartLength = cart.length
  for (var key in Object.keys(cart)) {
    cartContents += `${Object.keys(cart[key])} at $${cart[key][Object.keys(cart[key])]}`
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

function removeFromCart(item) {
  console.log(`item: ${item}`)
  for (let key in Object.keys(cart)) {
    console.log(`key: ${key}`)
    for (var myItem in cart[key]) {
      console.log(`myitem: ${myItem}`)
      if (item === myItem) {
        cart.splice(key, 1)
        return getCart()
      }
    }
  }
  console.log("That item is not in your cart.")
}
