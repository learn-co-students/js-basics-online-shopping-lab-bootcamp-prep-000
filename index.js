var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {[item]: Math.floor(Math.random()*100)+1}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1){
    var arr = Object.keys(cart[0])
    console.log(`In your cart, you have ${arr[0]} at $${cart[0][arr[0]]}.`)
  } else if (cart.length === 2){
    var arr1 = Object.keys(cart[0])
    var arr2 = Object.keys(cart[1])
    console.log(`In your cart, you have ${arr1} at $${cart[0][arr1]} and ${arr2} at $${cart[1][arr2]}.`)
  } else {
    var str = `In your cart, you have `
    for(let i = 0; i < cart.length-1; i++){
      var arr = Object.keys(cart[i])
      str += `${arr} at $${cart[i][arr]}, `
    }
    var arr = Object.keys(cart[cart.length-1])
    str += `and ${arr} at $${cart[cart.length-1][arr]}.`
    console.log(str)
  }
}

function total() {
  var tot = 0
  for(let i = 0; i < cart.length; i++){
    var arr = Object.keys(cart[i])
    tot += cart[i][arr[0]]
  }
  return tot
}

function removeFromCart(item) {
  if(cart.length === 0){
    console.log("That item is not in your cart.")
  } else{
    for(let i = 0; i<cart.length; i++){
      var arr = Object.keys(cart[i])
      if (arr[0] === item){
        cart.splice(i,1)
        return cart
      }
    }
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}

addToCart('bananas')
addToCart('apples')
var arr = Object.keys(cart[0])
console.log(cart.length)
console.log(cart)
console.log(arr[0])
console.log(cart[0][arr[0]])
