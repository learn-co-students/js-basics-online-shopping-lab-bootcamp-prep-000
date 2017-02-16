var cart = []

function getCart() {
  return cart
}

function addToCart(item){
  let price = Math.floor(Math.random() * 100);
  cart.push( {[item]: price} );
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  const l = cart.length

  if (!l) {
    console.log('Your shopping cart is empty.');
    return
  }

  const cartListing = []

  for (let i = 0; i < l; i += 1) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)
    let price = itemAndPrice[item]

    cartListing.push(`${item} at $${price}`)
  }
  console.log(`In your cart, you have ${cartListing.join(', ')}.`)
}

function removeFromCart(item){
  const l = cart.length
  for (var i = 0; i < l; i += 1){
    let itemX = cart[i];
    if (itemX.hasOwnProperty(item)) {
      return cart.splice(i, 1)
    }
  }
  return console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  return cart = []
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
