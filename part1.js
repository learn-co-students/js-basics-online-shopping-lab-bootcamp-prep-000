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
/*
//Test Code: Part 1 addToCart() Test
function test1() {//Correct Input & Data Storage Check
  cart = []
  console.log("Test1")
  addToCart("apples")
  console.log(getCart().length + " is equal to 1")//expect(getCart().length).toEqual(1)
  addToCart("bananas")
  console.log(getCart().length + " is equal to 2")//expect(getCart().length).toEqual(2)
  console.log(" ")
}
test1()

function test2() {//Turns items into JavaScript objects before adding them to the cart
  cart = []
  console.log("Test2")
  addToCart("carrots")
  let itemConstructor = getCart()[0].constructor
  console.log(itemConstructor + " is Object") //expect(itemConstructor).toEqual(Object)
  console.log(" ")
}
test2()

function test3() {//Properly structures objects in the { itemName: itemPrice } format
  cart = []
  console.log("Test3")
  addToCart("daikon")
  let itemName = Object.keys(getCart()[0])[0]
  let itemPrice = getCart()[0][itemName]
  console.log(itemName + " is daikon") //expect(itemName).toEqual("daikon");
  console.log(Number.isInteger(itemPrice) + " is true") //expect(Number.isInteger(itemPrice)).toBe(true)
  console.log(" ")
}
test3()

function test4() {//Sets the price as an integer between 1 and 100
  cart = []
  console.log("Test4")
  addToCart("eggplant")
  let itemPrice = getCart()[0]["eggplant"]
  console.log(itemPrice + " is less than or equal to 100") //expect(itemPrice).toBeLessThanOrEqualTo(100)
  console.log(itemPrice + " is greater than or equal to 1") //.toBeGreaterThanOrEqualTo(1)
  console.log(" ")
}
test4()

function test5() {//Chooses the price at random (Note: this test has a 1-in-10,000 chance of a false negative.
  cart = []
  console.log("Test5")
  addToCart("figs")
  addToCart("grapes")
  addToCart("halloumi")
  let prices = getCart().map(c => c[Object.keys(c)[0]])
  let pricesEqual = prices[0] === prices[1] && prices[1] === prices[2]
  console.log(pricesEqual + " is false.") //expect(pricesEqual).toBe(false)
  console.log(" ")
}
test5()

function test6() {//Prints a message to the console indicating that the item has been added
  cart = []
  console.log("Test6")
  addToCart("ice cream")
  console.log("Called with: ice cream has been added to your cart.")//expect(console.log).toHaveBeenCalledWith("ice cream has been added to your cart.")
  addToCart("juice")
  console.log("Called with: juice has been added to your cart.")//expect(console.log).toHaveBeenCalledWith("juice has been added to your cart.")
  //Returns the cart
  addToCart("kale")
  console.log("Called with: kale has been added to your cart.") //expect(addToCart("kale")).toEqual(getCart())
  console.log(" ")
}
test6()
*/
