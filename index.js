var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * Math.floor(100))
 var newItem = { [item]: itemPrice }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var statement = "In your cart, you have "
  var num = 0
  if (cart.length === 0){
    statement = "Your shopping cart is empty."
  } else {
    var item = {}
    var itemName
    var price = 0
    while (num < cart.length){
      item = cart[num]
      itemName = Object.keys(item)
      price = item[itemName]
      statement = statement + `${itemName} at $${price}`
      num++
      if (num === cart.length){
        statement = statement + "."
      } else if (num === cart.length - 1){
        if (cart.length > 2) {
          statement = statement + ","
        }
        statement = statement + " and "
        
      } else {
        statement = statement +", "
      }
      
  }
  }
  console.log(`${statement}`) 
}

function total() {
  var num = 0
  var total = 0
  if (cart.length === 0){
    return total
  } else {
    var item = {}
    var itemName
    while(num < cart.length) {
      item = cart[num]
      itemName = Object.keys(item)
      total = total + parseInt(item[itemName])
      num++
    }
    return total
  }
}

function removeFromCart(itemName) {
  var thing = {}
  var thingName
  var num = 0
  var success = 0
  while(num < cart.length) {
      thing = cart[num]
      if (thing.hasOwnProperty(itemName)){
        success = 1
        cart.splice(num, 1)
      }
      num++
  }
  if (success === 0){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  console.log(`Card number: ${cardNumber}`)
  if (cardNumber) {
    var totalPrice = total()
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
