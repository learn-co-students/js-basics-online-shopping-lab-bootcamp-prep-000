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
     function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min)) + min;
     }

   var price = getRandomInt(1, 100)

   var nameAndPrice = { [item]: price }

   cart.push(nameAndPrice)
   console.log(`${item} has been added to your cart.`)

   return cart
}



function viewCart() {
  // write your code here

  var inYourCart = "In your cart, you have "

  // we do this if the cart has only one item
  if (cart.length === 1) {
    for (var i = 0; i < cart.length; i++) {
      var items = Object.keys(cart[i])
      var currentObject = cart[i]

      inYourCart = inYourCart + `${items[i]} at $${currentObject[items[i]]}.`

      }
      console.log(inYourCart)
    }

    // we do this if the cart has two items
    else if (cart.length === 2) {
      for (var i = 0; i < cart.length; i++) {

        // log the final part, with no "and"
        if (i === cart.length - 1)
        {
          var items = Object.keys(cart[i])
          var currentObject = cart[i]

          inYourCart = inYourCart + `${items} at $${currentObject[items]}.`
        }

        // log the first item, with an "and"
        else {
          var items = Object.keys(cart[i])
          console.log(items)
          var currentObject = cart[i]
          console.log(currentObject)

          inYourCart = inYourCart + `${items} at $${currentObject[items]} and `
      }

      }



      console.log(inYourCart)
    }

    // we do this if the cart has more than two things
    else if (cart.length > 2) {
      for (var i = 0; i < cart.length; i++) {

        // for the final item, add it with an "and"
        if (i === cart.length - 1)
        {
          var items = Object.keys(cart[i])
          var currentObject = cart[i]

          inYourCart = inYourCart + `and ${items} at $${currentObject[items]}.`
        }

        // add everything else with a comma and no "and"
        else {
          var items = Object.keys(cart[i])
          console.log(items)
          var currentObject = cart[i]
          console.log(currentObject)

          inYourCart = inYourCart + `${items} at $${currentObject[items]}, `
      }

      }


      // log the message to the console
      console.log(inYourCart)
    }

    // we do this if the cart is empty
    else {
            console.log("Your shopping cart is empty.")
    }
}

function total() {
  // write your code here

  // declare our total for use in the for loop
  var total = 0;

  // iterate through cart to add totals together
  for (var i = 0; i < cart.length; i++) {

    // get the current item/price pair and its key
    var currentObject = cart[i]
    var currentItem = Object.keys(cart[i])

    // add to the total using CurrentItem as the key
    total = total + currentObject[currentItem]

  }

  return total
}


function removeFromCart(item) {
  // write your code here
  console.log(item)

  // if we find the item in the cart

  // since cart is an array of objects, we need to iterate through to grab each object and check properties
  for (var i = 0; i < cart.length; i++) {

    console.log("The for loop ran.")

    var currentObject = cart[i]

    // if the item is in the object, we delete it from the cart
    if (currentObject.hasOwnProperty(item)) {


      cart.splice(i, i)

      var didWeDelete = true;
      console.log(cart)
      return cart
    }

  }

  // print failure
  if (didWeDelete != true) {
    console.log("That item is not in your cart.")
    return cart
  }


}

var banana = "banana"
addToCart(banana);
placeOrder(12345)

function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }

  else {

    var totalPrice = total()
    console.log(totalPrice)
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)

    cart.length = 0;
  }


}
