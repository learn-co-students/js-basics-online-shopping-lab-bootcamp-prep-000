var cart;

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

var cart = {}

function getCart() {
  return cart
}

function addToCart(item) {
  let newItem = {}
  let price = Math.floor((Math.random() * 100) + 1)
  newItem[item] = price
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (getCart().length > 0) {
    let itemStringArray = []
    getCart().forEach(function(i) {
      let key = Object.keys(i)[0]
      let price = i[key]
      itemStringArray.push(`${key} at $${price}`)
    })
    console.log(`In your cart, you have ${itemStringArray.join(", ")}.`)
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function removeFromCart(item) {
  let itemIndex = cart.findIndex(function(cartItem){
    return Object.keys(cartItem)[0] == item
  });
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1)
    return cart
  } else {
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
      let t = total()
      cart.length = 0
      console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
  }
}
