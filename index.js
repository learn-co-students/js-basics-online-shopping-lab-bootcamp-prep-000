var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var itemPrice = {}
  itemPrice[item] = price
  cart.push(itemPrice)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if(cart.length < 1){
    console.log("Your shopping cart is empty.")
  }
  else{
    var info = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        info += item + " at $" + cart[i][item] + ", "
      }
    }
    var clean = info.slice(0, info.length-2)
  }
  console.log(clean + ".")
}

function total() {
  let t = 0

  for(var i = 0, l = cart.length; i < l; i++){
    for(var item in cart[i]){
      t += cart[i][item]
    }
  }
  return t
}

function removeFromCart(item) {
  var temp = 0
  for(var i = 0; i < cart.length; i++){
    var cartItem = cart[i]
    if(Object.keys(cartItem) == item){
      cart.splice(i, 1)
    }
    else{
      ++temp
    }
  }
  if(temp == cart.length){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for(var i = 0; i < cart.length; i++){
      var cartItem = cart[i]
      cart.splice(i, 1)
    }
  }
}
