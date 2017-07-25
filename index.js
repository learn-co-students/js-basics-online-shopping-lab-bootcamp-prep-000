var cart = [];
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
// 1. The `addToCart()` function accepts one argument, the name of an item.
//     + Use that passed-in string to create a new object representing the item. The object should consist of one key-value pair in
//     which the key is the item's name and the value is a randomly-generated price: `{ itemName: itemPrice }`. As more items are added,
//     the `cart` should start to look something like this: `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
//     + The price of each item should be a randomly-generated integer between 1 and 100.
//       * ***HINT***: Look into `Math.random()` and `Math.floor()`.
// //     + If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way to dynamically set the
// keys in an object literal. That is, it allows the use of variables as keys. If you're having trouble recalling the syntax, take a look
// back at the **Top Tip** in the [JavaScript Objects](https://learn.co/lessons/javascript-objects) lesson.
// //     + Upon the successful addition of a new item to the cart, the function should print `<itemName> has been added to your cart.`
// to the console and then `return` the updated `cart`.


function addToCart(item) {
 var itemOne = {[item]:(Math.floor(Math.random() * 100) + 1) }
 cart.push(itemOne)
 console.log(item + " has been added to your cart.")
 return cart
}
// The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, printing out the contents
//  as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
//   + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
//   + ***Note***: Pay close attention to the syntax above. The printed statement should be a single sentence that begins with
//   `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
//     * 1 item — `In your cart, you have bananas at $17.`
//     * 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
//     * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`



function viewCart(){
  var newStringArray = []
  for (var i = 0; i<cart.length; i++){
    var arrayKeys = Object.keys(cart[i])
      //retrieves the keys from the passed-in objects
    var arrayValues = cart[i][arrayKeys]
      //retrieves the values from the passed-in objects
    var itemString = arrayKeys + " at $" + arrayValues
      //combines keys and values into a string
    newStringArray.push(itemString)
      //loads this new string into a new Array
  }
    if (cart.length===0){
      console.log("Your shopping cart is empty.")
    }
    if (cart.length ===1){
      console.log("In your cart, you have " + newStringArray[0] + ".")
    }
    if (cart.length===2){
      console.log("In your cart, you have " + newStringArray[0] + " and " + newStringArray[1] + ".")
    }
    if (cart.length >=3){
      var bodyString = ""
      var finalString = newStringArray[cart.length-1]
      for (var i = 0; i<cart.length-1;i++){
          bodyString = bodyString + newStringArray[i]+", "
        }
      }
        var returnString = "In your cart, you have " + bodyString + "and " + finalString + "."
        console.log(returnString)
    }

//3. The `total()` function accepts no arguments, iterates through the `cart` array, and
// returns the current total value of the items in the cart.
function total() {
  var total = ""
  for (var i = 0; i<cart.length; i++){
    var arrayKeys = Object.keys(cart[i])
      //retrieves the keys from the cart
    var arrayValues = cart[i][arrayKeys]
      //retrieves the values from the cart
    var arrayIntValues = parseInt(arrayValues)
    //converts values into integers
    var total = +total + +arrayIntValues
  }
  return total
}
// 4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
//     + If the cart does not contain a matching item, the function should print out `That item is not in your cart.`
// and return the unchanged cart.
//     + If the item *is* present in the cart, the function should remove the object from the cart and then
// return the updated cart.
//     + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter, then remove
// it if it
 // matches. You might find [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Glob
 // al_Objects/Object/hasOwnProperty) to be useful.

// function removeFromCart(item) {
//   var arrayKeys = []
//   for (var i = 0; i<cart.length; i++){
//     arrayKeys.push(Object.keys(cart[i])[0])
//       //retrieves the keys from the passed-in objects and pushes them to a new array
//     }
//   if(!cart.hasOwnProperty(item)){
//     console.log("That item is not in your cart.")
//   }
//   if(!arrayKeys.indexOf(item)===-1){
//     var itemIndex = arrayKeys.indexOf(item)
//     cart.splice(itemIndex,1)
//     console.log(itemIndex)
//   }
//   return cart
// }
function removeFromCart(item){
    for (var i = 0; i<cart.length; i++){
      var itemKey = Object.keys(cart[i])[0]
        //retrieves the keys from the passed-in objects
      if(itemKey===item){
        cart.splice(i,1)
      }
    }
    if(!cart.hasOwnProperty(item)){
      console.log("That item is not in your cart.")
    }
}
// The `placeOrder()` function accepts one argument, a credit card number.
//     + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
//     + If a card number is received, the function should print out `Your total cost is $71, which will be charged to the card 83296759.`
//     and then empty the `cart` array.
function placeOrder(cardNumber) {
  if (arguments.length===0){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  if(arguments.length>0){
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  cart = []
  }
}
