var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {}

  function getRandom(max){
    return Math.floor(Math.random() * Math.floor(max))
  }

  itemObj[item] = getRandom(100)
  cart.push(itemObj)

  console.log(`${item} has been added to your cart.`)
  return cart
}



function viewCart(){
  var message = 'In your cart, you have '

  if(cart.length === 0){
    console.log ('Your shopping cart is empty.')
  }

  else if(cart.length === 1){
    console.log(`${message}${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }

  else if(cart.length === 2){
    console.log(`${message}${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  }
  else{
    var lastItem = []
    var lastObj = cart[cart.length-1]
    var lastName = Object.keys(lastObj)
    var lastPrice = lastObj[lastName]

    lastItem.push(`${lastName} at $${lastPrice}`)

    var infoArr = []
    for(var i=0; i<cart.length-1; i++){
      var itemObj = cart[i]
      var itemName = Object.keys(itemObj)
      var itemPrice = itemObj[itemName]

      infoArr.push(`${itemName} at $${itemPrice}`)
    }

    var itemsStr = infoArr.join(', ')
    var fullItemStr = itemsStr + ', and '+ lastItem

    console.log(`${message}${fullItemStr}.`)
  }
}



function total() {
  var total = 0

  for(var i=0; i<cart.length; i++){
    var itemObj = cart[i]

    for(var item in itemObj){
      total += itemObj[item]
    }
  }
  return total
}



function removeFromCart(item) {
  for(var i=0; i<cart.length; i++){
    var itemObj = cart[i]
    var itemPresent = false

    if(itemObj.hasOwnProperty(item)){
      cart = cart.slice(0,i).concat(cart.slice(i+1,cart.length))
      itemPresent = true
    }
  }

  if(!itemPresent){
    console.log('That item is not in your cart.')
  }
}



function placeOrder(cardNumber) {
  var cartTotal = total()

  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
