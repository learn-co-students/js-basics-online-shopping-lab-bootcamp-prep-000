var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]){
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  if(!cart.length){
    console.log("Your shopping cart is empty.")
  }
  const ItemAndPrice = []
  for(let i = 0; i < cart.length; i++) {
    let ItemPriceObj = cart[i]
    let itm = Object.keys(ItemPriceObj)
    let price = ItemPriceObj[itm]
    ItemAndPrice.push (`${itm} at \$${price}`)
  }
    console.log(`In your cart, you have ${ItemAndPrice.join(', ')}.`)
}

function removeFromCart(item) {
  let foundIt = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      foundIt= true
      cart.splice(i,1)
      return cart
    }
  }
  if (!foundIt) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardnumber) {
  if(!cardnumber) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardnumber}.`)
  cart = []
}
