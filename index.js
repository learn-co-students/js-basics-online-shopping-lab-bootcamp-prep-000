var cart = [];

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var pairs = "In your cart, you have "
  for (var i = 0; i < cart.length; i++) {
    //for (var items in cart[i]) {
      if(i === cart.length-1) {
        pairs += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
      } else {
       pairs += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
      }

    //console.log(`In your cart you have ${Object.keys(cart[i])} at ${cart[i][Object.keys(cart[i])]}`)
  }
  console.log(`${pairs}`)
}

function removeFromCart(item) {
  var nope = 0
  for(var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
    } else if (cart[i].hasOwnProperty(item) === false) {
      nope += 1
    }
  }
  if (nope === cart.length) {
    console.log('That item is not in your cart.')
  }
  return cart
}

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

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  return setCart([])
}

//sure
