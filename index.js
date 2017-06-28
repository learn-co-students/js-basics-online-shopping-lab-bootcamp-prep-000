//this lab sucked. The previous coursework was inadequate to help complete the lab, and I ended up just googling everything, inputting multiple new, unexplained methods by trial and error, and learning that way.  Which is fine, but odd this early in a course designed to teach you to code.
var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var foo = {[item]: Math.floor(Math.random()*100 + 1)}
 cart.push(foo)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var keyList = []
  var valueList = []
  var array = []
  for(var i = 0; i < cart.length; i ++) {
    keyList.push(Object.keys(cart[i])) //array of keys
    valueList.push(cart[i][keyList[i]]) //array of values (Object.values() works everywhere but in learn IDE?)
    array.push(`${keyList[i]} at $${valueList[i]}`)
  }

  if(cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    var output = ''
    if(array.length === 1) {
      output = array.join() //join does nothing for a 1-length array
    }
    if(array.length === 2) {
      output = array.join(" and ") //joins the 2 array elements with ' and ' in between'
    }
    if(array.length >= 3) {
      var foo = array.pop() //removes and stores final element in foo
      output = array.join(", ") //joins all remaining elements with commas
      output = output + ', and ' + foo //concatenates previously comma-joined array and removed (foo) final element with ', and '
    }
    console.log("In your cart, you have " + output + '.')
  }

}

function total() {
  // write your code here
  var bar = 0
  for(var i = 0; i < cart.length; i ++) {
    var object = cart[i] //as it loops, this grabs each object in the array
    for ( var key in object ){ //loops through each key in each object
      var value = object[key] //grabs value associated with each key
      bar += value //adds value to total.
    }
  }
  return bar
}

function removeFromCart(item) {
  var foo = cart //to check if it was modified
  for(var i = 0; i < cart.length; i ++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1) //nifty! excises one element (object, in this case) from the array.  Dont think itd work if the object has more than 1 key:value pair
      return cart
    }
    }
      if(foo === cart) { //if cart was modified by rmoving, this will evaluate to false.
        console.log("That item is not in your cart.")
        return cart
      }
  }

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
