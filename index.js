var cart = []

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
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length

    if (!l) {
      return console.log("Your shopping cart is empty.")
    }

    const itemsAndPrices = []

    for (let i = 0; i < l; i++) {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]

      itemsAndPrices.push(`${item} at \$${price}`)
    }

    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
  }



/*  if (cart.length > 0) {

    var cartView = []
    for (var i = 0; i < cart.length; i++) {
      let itemWithPrice = cart[i]
      let item = Object.keys(itemWithPrice)[0]
      let price = itemWithPrice[item]

      cartView.push(`${item} at \$${price}`)

    }
    console.log(`In your cart, you have ${cartView.join(`, `)}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}*/

function removeFromCart(itemForRemoval) {
  var itemInCart = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemForRemoval)) {
      itemInCart = true
      delete cart.itemForRemoval
      return cart
      //return cart
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

viewCart()
