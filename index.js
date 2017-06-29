var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var itemName = item.toString()
 var obj = {[itemName] : itemPrice}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var outputText = "In your cart, you have"
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var obj = cart[0]
    var objItem = Object.keys(obj)
    var objPrice = obj[objItem]
    console.log(`${outputText} ${objItem} at $${objPrice}.`)

  } else if (cart.length === 2) {
     var newArray = []
     for (var i = 0; i < cart.length; i++) {
       var obj = cart[i]
       var objItem = Object.keys(obj)
       var objPrice = obj[objItem]
       newArray[i] = `${objItem} at $${objPrice}`
     }
     console.log(`${outputText} ${newArray.join(" and ")}.`)
     /*
     My thought process for the 2-item scenario began by realizing that,
     for each of the two items in the cart, the output to the console.log is in
     the same format:   itemName at itemPrice

     I just needed to prepend the standard text "In your cart, you have",
     and insert the "and" between the two expressions.  I could have done this
     in another - albeit messier - way but, in researching alternative styles,
     I found the Array.join() function, which has a comma as a default separator,
     but allows for other separators.  I thus decided to create an array, and
     have each of the expressions (ex.  itemName at itemPrice) occupy its own spot
     in the array.

     In this case, " and " is the separator that I needed and, importantly, it doesn't
     automatically get appended to the last item in the array.
     I only needed a period(.) at the end of the expression in console.log.
     */
  } else { //
    //for (var i=0; i < cart.length; i++) {
      var newArray = []
      //Can store array items in the same way as with a 2-item cart
      for (var i = 0; i < cart.length; i++) {
        var obj = cart[i]
        var objItem = Object.keys(obj)
        var objPrice = obj[objItem]
        newArray[i] = `${objItem} at $${objPrice}`
      }
      newArray[i-1] = `and ${newArray[i-1]}`
      console.log(`${outputText} ${newArray.join(", ")}.`)
      //still need to include "and" before the final array item.
    }
}

function total() {
  // write your code here
  var total = 0;
  for (var i=0; i < cart.length; i++) {
    var obj = cart[i]
    var objItem = Object.keys(obj)
    var objPrice = obj[objItem]
    total = total + objPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code he
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
