
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

//Part 4 removeFromCart() Test
//Removes the specified item from the cart
addToCart("vanilla")
addToCart("watermelon")
addToCart("yams")
removeFromCart("watermelon")
const firstItem = Object.keys(getCart()[0])[0]
const secondItem = Object.keys(getCart()[1])[0]
console.log(`Expect ${firstItem} to equal vanilla.`) //expect(firstItem).toEqual("vanilla")
console.log(`Expect ${secondItem} to equal yams.`) //expect(secondItem).toEqual("yams")
removeFromCart("yams")
console.log(`Expect ${getCart().length} to equal 1.`) //expect(getCart().length).toEqual(1)
//Alerts you if you're trying to remove an item that isn't in your cart
// Repeat item name from previous test to prevent hard-coding.
removeFromCart("yams")
console.log(`Expect "That item is not in your cart." to have been called.`) //expect(console.log).toHaveBeenCalledWith("That item is not in your cart.")
