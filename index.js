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

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  }
  else {
    var cart_string = "In your cart, you have"
    for (var item in cart){
      var itemName = Object.keys(cart[item])
      var itemPrice = cart[item][itemName]
      cart_string += ` ${itemName} at $${itemPrice},`
    }
    var newstring = `${cart_string.slice(0,-1)}.`
    console.log(newstring)
  }
}

function removeFromCart(item){
    for (var index in cart){
      var current = cart[index]
      if (cart[index].hasOwnProperty(item)){
        cart.splice(index, 1)
        return cart
      }
    }
    console.log("That item is not in your cart.")
  }

function placeOrder(credit){
  if (typeof credit === "number"){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${credit}.`)
  } else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = []
}
