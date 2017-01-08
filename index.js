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
function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var itemAndPrice = []
  if(cart.length === 0){
    console.log('Your shopping cart is empty.')
  }
  for (let i = 0; i < cart.length; i++) {
    var object = cart[i]
    var key = Object.keys(object)
    var value = object[key]
    itemAndPrice.push(` ${key} at $${object[key]}`)
  }
  console.log(`In your cart, you have${itemAndPrice}.`)
}

function removeFromCart(item){
  var itemFound = 0
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i)
      itemFound++
    }
  } 
  if (itemFound === 0) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(creditCard){
  if (creditCard === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
  }
  setCart([])
}
