
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
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var cartItem = {}
  cartItem[item] = price
  cart.push(cartItem)

  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var updatedCart = []

    if (cart.length === 0){
      console.log("Your shopping cart is empty.")
    }
    else {
      for (var i = 0; i < cart.length; i++){
        var itemKey = Object.keys(cart[i])[0]
        updatedCart.push(itemKey + " at " + "$" + cart[i][itemKey])
      }
      console.log("In your cart, you have " + updatedCart.join(", ") + ".")
    }
}

function removeFromCart(itemDel){
  var isInCart = false
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(itemDel)){
      isInCart = true
      cart.splice(i,1)
    }
  }
  if (!isInCart) {
      console.log("That item is not in your cart.")
    }

  return cart
}

function placeOrder(cardNumber){
  if (cardNumber > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else{
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  cart.splice(0)
  return cart;
}
