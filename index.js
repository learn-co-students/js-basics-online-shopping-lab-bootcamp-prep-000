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
  return cart
}

function addToCart(item) {
  var price = (Math.random()*100)
  cart.push({item : item[price]})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else {
        var youHave= "In your cart, you have "
        for(var i in cart){
          var item = Object.keys(cart[i])[0]
          var price = cart[i][item]
          var itemAndPrice = `${cart} at $${cart[item]}`
        }
        debugger
        console.log('hi')
      }

}

function removeFromCart(item) {
  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty()) {
      cart.splice( i , 1 )
      return cart
    }
    else {
      console.log("That item is not in your cart.")
    }
  }
}

function placeOrder(cardNumber) {
  var emptyArray=[]
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart(emptyArray);
  }
}
