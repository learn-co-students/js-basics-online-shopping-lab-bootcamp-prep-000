
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

//Recode of viewCart()
function viewCart() {
  var aKey
  var aValue
  var keyValuePairs = []
  var sumOfKeyValuePairs
  for(var i = 0; i < cart.length; i++) {
    // Retrieve and Store Keys from Key-Value Pairs
    var objectOfKeyValuePair = getCart()[i]
    var arrayOfKey = Object.keys(objectOfKeyValuePair)
    var key = arrayOfKey[0]

    // Retrieve and Store Values from Key-Value Pairs
    var value = getCart()[i][key]

    // Storage of Strings for Console Logging
    let aKey = `${key}`
    let aValue = " at $" + value
    let keyValuePair = aKey + aValue
    keyValuePairs.push(keyValuePair)

    // Creating One Long String for Console Logging (Works for 2 or more Items)
    function addKeyValuePairs(keyValuePair) {
      sumOfKeyValuePairs = sumOfKeyValuePairs + ", " + keyValuePair
    }

    // Running addKeyValuePairs() to Create Long String Minus Last Item-Price (Key-Value Pair)
    if (i < cart.length - 1) {addKeyValuePairs(keyValuePair)}
  }

  if (cart.length > 1) {
      // Creates the one long, coherent statement.
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
  // Default if Cart is Empty
  else {
    if (cart.length == 1) {console.log ("In your cart, you have " + key + " at $" + value + ".")}
    if (cart.length < 1) {console.log ("Your shopping cart is empty.")}
  }
}
/*
//Test Code: Part 2 viewCart() Test
function test1() {//Prints 'Your shopping cart is empty.' if the cart is empty
  cart = []
  console.log("test1")
  viewCart()
  console.log("Called with: Your shopping cart is empty.") //expect(console.log).toHaveBeenCalledWith("Your shopping cart is empty.")
  console.log(" ")
}
test1()

function test2() {//Correctly prints a one-item cart
  cart = []
  console.log("test2")
  addToCart("lemons");
  const lemonsCost = getCart()[0]["lemons"];
  viewCart()
  console.log(`Called with: In your cart, you have lemons at $${lemonsCost}.`) //expect(console.log).toHaveBeenCalledWith(`In your cart, you have lemons at $${lemonsCost}.`)
  console.log(" ")
}
test2()

function test3() {//Correctly prints a two-item cart
  cart = []
  console.log("test3")
  addToCart("mango")
  addToCart("nuts")
  const mangoCost = getCart()[0]["mango"]
  const nutsCost = getCart()[1]["nuts"]
  viewCart()
  console.log(`Called with: In your cart, you have mango at $${mangoCost} and nuts at $${nutsCost}.`)//expect(console.log).toHaveBeenCalledWith(`In your cart, you have mango at $${mangoCost} and nuts at $${nutsCost}.`)
  console.log(" ")
}
test3()

function test4() {//Correctly prints a three-or-more-item cart
  cart = []
  console.log("test4")
  addToCart("orange")
  addToCart("pear")
  addToCart("quince")
  const orangeCost = getCart()[0]["orange"]
  const pearCost = getCart()[1]["pear"]
  const quinceCost = getCart()[2]["quince"]
  viewCart()
  console.log(`Called with: In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, and quince at $${quinceCost}.`)//expect(console.log).toHaveBeenCalledWith(`In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, and quince at $${quinceCost}.`)
  addToCart("rhubarb")
  const rhubarbCost = getCart()[3]["rhubarb"]
  viewCart()
  console.log(`Called with: In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, quince at $${quinceCost}, and rhubarb at $${rhubarbCost}.`)//expect(console.log).toHaveBeenCalledWith(`In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, quince at $${quinceCost}, and rhubarb at $${rhubarbCost}.`)
  console.log(" ")
}
test4()
*/
