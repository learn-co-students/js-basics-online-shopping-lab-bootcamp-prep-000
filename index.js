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
  } return t
}

function getCart() {
  return cart
}

function  addToCart(item) {
  const price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length

  if(!1) {
    return console.log("Your shopping cart is empty.")
  } else {
    const wholeCart = []
    for (let i = 0; i < l; i++) {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]

      wholeCart.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${wholeCart.join(', ')}.`)
  }
}

function removeFromCart(item) {
  if (!item)
}
