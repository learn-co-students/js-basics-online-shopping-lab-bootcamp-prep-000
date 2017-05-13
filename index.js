var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)+1;
  cart.push({[item]: price})
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
    var cartSummary = [];
    //debugger
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        var itemName = Object.keys(cart[i])
        var itemPrice = cart[i][itemName]
      cartSummary.push(`${itemName} at $${itemPrice}`);
      }
    console.log('In your cart, you have ' + cartSummary.join(', ') + ".")
    }
    else {
      console.log('Your shopping cart is empty.')
    }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    cart[i].hasOwnProperty(item) == true
    cart.splice(i, 1);
    return cart
    }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
    if (cardNumber == null) {
      console.log('We don\'t have a credit card on file for you to place your order.')
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
    cart.splice(0, cart.length);
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
