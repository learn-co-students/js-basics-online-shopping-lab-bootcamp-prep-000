var cart = []

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
    }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
 let itemInCart = false;

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  for (let i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item)) {
        itemInCart = true
        cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
    }
  return cart
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

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
