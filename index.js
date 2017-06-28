var cart = [];

function getCart(){
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart (user_item){
  var price = Math.floor(Math.random() * 100)
  var obj = {}
  obj[user_item] = price
  cart.push(obj)
  console.log(`${user_item} has been added to your cart.`)
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
/*
function viewCart (){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var output_sentence = "In your cart, you have "
    var shopping_items = Object.keys(cart)
    for(let i = 0; i < cart.length; i++) {
      output_sentence += `${shopping_items[i]} at ${cart[shopping_items[i]]}${i === (cart.length - 1) ? "." : ", "}`
    }
    console.log(output_sentence)
  }
}
*/
function removeFromCart(cart_item) {
  var cart_items = []
  for (let i = 0; i < cart.length; i++){
    cart_items.push(Object.keys(cart[i][0]))
  }
  for (let i = 0; i < cart_items.length; i++){
    if (cart_items[i] === cart_item) {
      cart = cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder (cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`)
  }
  cart = []
}
