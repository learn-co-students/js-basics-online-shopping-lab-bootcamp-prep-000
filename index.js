var cart = [];

function getCart() {
  return cart
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if(!cart.length) {
    console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

for (let i = 0; i < cart.length; i++) {
  let itemAndPrice = cart[i]
  let item = Object.keys(itemAndPrice)
  let price = itemAndPrice[item]
  itemsAndPrices.push(`${item} at $${price}`)
}
console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(removedItem) {
  let itemInCart = false

  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(removedItem)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
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

function placeOrder(number) {
  if(!number) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    cart = []
  }
}

function setCart(newCart) {
  cart = newCart;
};
