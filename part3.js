
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

// Part 3
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

//Part 3 total() Test
  //Adds up the price of all items in the cart
addToCart("sorghum")
addToCart("tarragon")
const sorghumCost = getCart()[0]["sorghum"]
const tarragonCost = getCart()[1]["tarragon"]
let totalCost = sorghumCost + tarragonCost
console.log(total() + " is equal to " + totalCost) //expect(total()).toBe(totalCost)
addToCart("urchin")
const urchinCost = getCart()[2]["urchin"]
totalCost += urchinCost
console.log(total() + " is equal to " + totalCost) // expect(total()).toBe(totalCost)
