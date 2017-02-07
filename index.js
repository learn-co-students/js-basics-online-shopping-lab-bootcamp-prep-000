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
  var price = Math.floor(Math.random() * 101)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var newArray = []
  if(cart.length > 0){
    for(let i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        newArray.push(` ${item} at $${cart[i][item]}`)
      }
    }
    console.log(`In your cart, you have${newArray}.`)
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  if(cart.length > 0){
    for(var item in cart){
      if(cart.hasOwnProperty(item)){
        cart.splice(item, 1)
      }
    }
  }else{
    console.log("That item is not in your cart.")
  }return cart
}

function placeOrder(cardNumber){
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
