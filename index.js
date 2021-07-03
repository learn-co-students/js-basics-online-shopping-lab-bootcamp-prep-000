var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = parseInt(Math.floor((Math.random() * 100) + 1))
 var itemList = { [item]: itemPrice }
 cart.push(itemList)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (!cart.length){
     return console.log('Your shopping cart is empty.')
  }
  var currentCart =[]
  var currentItems =[]
  var currentCost = 0
  for (var i = 0; i < cart.length; i++){
    currentItems[i] = Object.keys(cart[i])
    currentCost = cart[i][currentItems[i]]
    currentCart[i] = `${currentItems[i]} at $${currentCost}`
  }
      if (cart.length == 1) {
        return console.log(`In your cart, you have ${currentCart[0]}.`)
      } else if (cart.length == 2){
        return console.log(`In your cart, you have ${currentCart[0]} and ${currentCart[1]}.`)
      } else {
        var cCart1 = currentCart.slice(0, (currentCart.length-1))
        var cCart2 = currentCart.slice((currentCart.length-1))
        return console.log(`In your cart, you have ${cCart1.join(', ')}, and ${cCart2}.`)
      }
    }

function total() {
  var totalCost = 0
  var currentCost = 0
  for (var i  =0; i < cart.length; i++){
    currentCost = cart[i][Object.keys(cart[i])]
    totalCost += currentCost
  }
  return totalCost

}
function removeFromCart(item) {
  var index = 0
  var currentItems = []
  var deletedItem
  var truth
  for (var i = 0; i < cart.length; i++){
    currentItems[i] = Object.keys(cart[i])
    if (currentItems[i] == item) {
     index = i
     truth = true
   }
  }
  debugger
  if (truth == true){
    if (index == 0){
      deletedItem = cart.shift()
    } else if (index == (cart.length-1)){
      deletedItem = cart.pop()
    } else {
      var num = parseInt(index) + 1
      var cart1 = cart.slice(0,index)
      var cart2 = cart.slice(num)
      cart = [...cart1,...cart2]
    }
  } else {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)){
    console.log("Sorry, we don't have a credit card on file for you.")
    }
    else {
      var cost = total()
      console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    }
    cart = []
    return cart
}
