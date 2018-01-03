var cart = [];

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 cart.push({[item]: Math.floor(100 * Math.random())})
 console.log(`${[item]} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  debugger
  var str = `In your cart, you have `
  if(cart.length < 1) {
    console.log('Your shopping cart is empty.')
  } else {
    for(var i = 0; i < cart.length; i++) {
      for(var j in cart[i]) {
        if(cart.length === 1) {
          str+= `${j} at $${cart[i][j]}.`
        } else if(cart.length === 2) {
          if(i === 0) {
            str+= `${j} at $${cart[i][j]} `
          } else {
            str+= `and ${j} at $${cart[i][j]}.`
          }
        } else if(cart.length >= 3){
          if(i === 0 || i < cart.length-1) {
            str+= `${j} at $${cart[i][j]}, `
          } else if(i === cart.length-1) {
            str+= `and ${j} at $${cart[i][j]}.`
          }
        }
      }
    }
    console.log(str)
  }
  }

function total() {
  // write your code here
  var totalCost = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var j in cart[i]) {
      var cost= cart[i][j]
    }
    totalCost+=cost
  }
  return totalCost

}

function removeFromCart(item) {
  // write your code here
  debugger
  var counter = 0
  for(var i = 0; i < cart.length; i++) {
    for(var j in cart[i]) {
      if(j !== item) {
        counter++
      } else {
        cart.splice(i,1);
      }
    }
  }
  if(counter === cart.length) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    var cartTotal = total()
    var str=`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  cart.pop()
   console.log(str)
  }
}
