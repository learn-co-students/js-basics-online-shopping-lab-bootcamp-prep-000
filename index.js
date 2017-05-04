var cart=[];

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
  cart.push({[item]:(Math.floor(Math.random()*100))})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else{
    var itemReport = "In your cart, you have"
    for (var i=0;i<cart.length;i++){
      var itemName = Object.keys(cart[i])
      itemReport = itemReport+` ${itemName} at $${cart[i][itemName]}${i===cart.length-1 ? "." : ","}`
    }
    console.log(itemReport)
    }
  }

  function removeFromCart(item) {
    var matches = 0;
    for (var i=0;i<cart.length;i++){
      if (cart[i].hasOwnProperty(item)){
        cart.splice(i,1)
        matches++
      }
    }
    if (matches<1){
      console.log("That item is not in your cart.")
    }else {
      return cart
    }
  }

  function placeOrder(cardNumber) {
    if (cardNumber!=null){ //not sure how to check if it's nothing....
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = cart.splice() //before or after log?
      return cart
    }else{
      console.log("We don't have a credit card on file for you to place your order.")
    }
  }
