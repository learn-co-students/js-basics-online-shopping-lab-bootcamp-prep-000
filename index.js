var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * ((100-1) +1) +1)
  var newobj = {[item]: itemPrice}
  cart.push(newobj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if(cart.length === 1) {
    var cartitem = Object.keys(cart[0])[0]
    var price = cart[0][cartitem]
    console.log(`In your cart, you have ${cartitem} at $${price}.`)
  }
  else if(cart.length === 2) {
    var cartitem1 = Object.keys(cart[0])[0]
    var cartitem2 = Object.keys(cart[1])[0]
    var price1 = cart[0][cartitem1]
    var price2 = cart[1][cartitem2]
    console.log(`In your cart, you have ${cartitem1} at $${price1} and ${cartitem2} at $${price2}.`)
  }
  else {
    var output = `In your cart, you have `
    for(var i = 0; i < cart.length; i++) {
      var cartitem = Object.keys(cart[i]) [0]
      var price = cart[i][cartitem]
      if(i === cart.length-1){
        output = output + `and ${cartitem} at $${price}.`
      }
      else {
        output = output + `${cartitem} at $${price}, `
      }
    }
    console.log(output)
  }

}

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++) {
    var cartitem = Object.keys(cart[i])[0]
    total = total + parseInt(cart[i][cartitem])
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(item === (Object.keys(cart[i])[0])) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    var tot = total()
    console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`)
    while(cart.length > 0) {
      cart.pop()
    }
  }
}
