var cart = []; // [0,1,2]

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = {}
  object[item] = Math.floor(Math.random() * 101)
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

addToCart("bananas")
// addToCart("apples")
// addToCart("pancakes")
// addToCart("oranges")

function viewCart() {
  // iterate over each item in the cart
  var x = "In your cart, you have";
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }

  for (var i = 0; i < cart.length; i++){
    // save each items (which are objects) as a variable
    var object = cart[i]
    // iterating over each key in object
    for (var key in object){

      // if cart has one item
      if (cart.length === 1){
        // adding string to x
        x += ` ${key} at $${object[key]}.`
      }

      // if cart has 2 items
      if (cart.length === 2){
        // if last item in cart
        if (i === cart.length - 1){
          // add string to x
          x += ` and ${key} at $${object[key]}.`
        // if not last item in cart
        } else {
          // add string to x
            x += ` ${key} at $${object[key]}`
        }
      }
      // if cart has more than two items
      if (cart.length > 2){
        // if last item in cart
        if (i === cart.length - 1){
          x += ` and ${key} at $${object[key]}.`
        // if not last item in cart
        } else {
          x += ` ${key} at $${object[key]},`
        }
      }

    }
  }
  console.log(x)
}

function total() {
  var cartTotal = 0
  // iterate over each item in the cart
  for (var i = 0; i < cart.length; i++){
  // save each items (which are objects) as a variable
    var object = cart[i]
  // iterating over each key in object
      for (var key in object){
        // console.log(object[key])
        cartTotal += object[key]
        // console.log(cartTotal)
      }
  }
  return cartTotal
}

total()
console.log(total())


function removeFromCart(item) {
  var cartObject = {}
  // interate through cart
  for (var i = 0; i < cart.length; i++){
    // saving each item in cart as an object
    var object = cart[i]
    // iterating through each key in object
    for (var key in object){
      // saving the key and value from old object to new object
      cartObject[key] = object[key]
    }
    console.log(cartObject)
  }
  // if new object has the item
  if (cartObject.hasOwnProperty(item)){
    // iterate through each item in cart
      for(var i = 0; i < cart.length; i++){
        var object = cart[i]
        if (object.hasOwnProperty(item)){
          cart.splice(i,1)
          return cart
        }
      }

  } else {
    console.log("That item is not in your cart.")
  }
}





function placeOrder(cardNumber) {  //undefined
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return false
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
    }

}

console.log(placeOrder(12345))
