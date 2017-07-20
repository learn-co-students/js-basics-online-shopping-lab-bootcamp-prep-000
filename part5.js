
//Code
var cart = [];
function getCart() {
 return cart;
}
function setCart(c) {
  cart = c;
  return cart;
}

var item
function addToCart(item) {
  var itemName = item
  var max
  var min
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
  var itemPrice = getRandomInt(1, 100)
  item = {[itemName]: itemPrice}
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var aKey
  var aValue
  var keyValuePairs = []
  var sumOfKeyValuePairs
  for(var i = 0; i < cart.length; i++) {
    var objectOfKeyValuePair = getCart()[i]
    var arrayOfKey = Object.keys(objectOfKeyValuePair)
    var key = arrayOfKey[0]
    var value = getCart()[i][key]

    let aKey = `${key}`
    let aValue = " at $" + value
    let keyValuePair = aKey + aValue
    keyValuePairs.push(keyValuePair)

    function addKeyValuePairs(keyValuePair) {
      sumOfKeyValuePairs = sumOfKeyValuePairs + ", " + keyValuePair
    }
    if (i < cart.length - 1) {addKeyValuePairs(keyValuePair)}
  }

  if (cart.length > 1) {
      function consoleLog() {
        let intro = "In your cart, you have "
        let comma = ", "
        let and = "and "
        let period = "."
        let introMod = "In your cart, you have"
        if (cart.length == 2) {console.log(sumOfKeyValuePairs.replace("undefined,", introMod) + " and " + keyValuePairs[cart.length - 1] + period)}
        if (cart.length > 2) {console.log(sumOfKeyValuePairs.replace("undefined,", introMod) + comma + and + keyValuePairs[cart.length - 1] + period)}
      }
      consoleLog()
    }
  else {
    if (cart.length == 1) {console.log ("In your cart, you have " + key + " at $" + value + ".")}
    if (cart.length < 1) {console.log ("Your shopping cart is empty.")}
  }
}

function total() {
  var itemTotalPrice = 0
  for(var i = 0; i < cart.length; i++) {
    var objectOfKeyValuePair = getCart()[i]
    var arrayOfKey = Object.keys(objectOfKeyValuePair)
    var key = arrayOfKey[0]
    var value = getCart()[i][key]
    itemTotalPrice = itemTotalPrice + value
  }
  return itemTotalPrice
}

var itemToRemove
function removeFromCart(itemToRemove) {
  var counter = 0
  var theCount = 0

  for(var i = 0; i < cart.length; i++) {
    var objectOfKeyValuePair = getCart()[i]
    var arrayOfKey = Object.keys(objectOfKeyValuePair)
    var key = arrayOfKey[0]
    if(key === itemToRemove) {theCount = counter}
    else {counter++}
  }

  var itemPricePair = getCart()[theCount]
  var evaluation = Object.keys(itemPricePair)
  var itemRemovalCheck = evaluation[0]

  if(itemRemovalCheck === itemToRemove) {
    cart.splice(theCount, 1)
    return getCart()
  }
  else {
    console.log("That item is not in your cart.")
    return getCart()
  }
}

var creditCardNumber
function placeOrder(creditCardNumber) {
  if(`${creditCardNumber}` === 'undefined') {console.log(`Sorry, we don't have a credit card on file for you.`)}
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    cart = []
  }
}

//Part 5 placeOrder() Test
  //Doesn't place the order if a credit card number is not provided
    placeOrder()
    console.log(`Expect: Sorry, we don't have a credit card on file for you.`) // expect(console.log).toHaveBeenCalledWith("Sorry, we don't have a credit card on file for you.")
  //Places an order when a credit card number is provided
    addToCart("zucchini")
    const cartTotal = total()
    const cardNumber = Math.floor(Math.random() * 100000000)
    placeOrder(cardNumber)
    console.log(`Expect: Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`) //expect(console.log).toHaveBeenCalledWith(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  //Empties the cart
    addToCart("apples")
    placeOrder(12345678)
    console.log(`Expect: ${getCart()} to equal ${[]}`) //expect(getCart()).toEqual([])
