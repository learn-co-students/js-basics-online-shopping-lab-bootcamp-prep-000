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

  var newObj = new Object({[item]: Math.floor(Math.random()*100)})
  cart.push(newObj)

  console.log(`${item} has been added to your cart.`)
//  console.log(cart)

  return cart
}


function viewCart() {
  // write your code here
  var fullCartString = "In your cart, you have "

  if (cart && cart.length > 0) {
      if (cart.length == 1 ) {
        fullCartString = fullCartString + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + "."
      }
      else if (cart.length == 2 ) {
        fullCartString = fullCartString + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + " and " + Object.keys(cart[1])[0] + " at $" + cart[1][Object.keys(cart[1])[0]] + "."
      }
      else {
          for (var i = 0; i < cart.length; i++) {
            if( (i+1) == cart.length ) {
              fullCartString = fullCartString + "and " + Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + "."
            }
            else {
              fullCartString = fullCartString + Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]]+ ", "
            }
          }
      }
      console.log(fullCartString)
  }
  else {
    console.log("Your shopping cart is empty.")
  }

}


function total() {
  // write your code here
  var totalVal = 0

  // if (cart && cart.length > 0) {

      for (var i = 0; i < cart.length; i++) {

          //console.log(totalVal)
          //console.log(parseInt(cart[i][Object.keys(cart[i])[0]]))
          totalVal = totalVal + parseInt(cart[i][Object.keys(cart[i])[0]])
          //

          //console.log(totalVal)
      }
      return totalVal
  //}
  // else {
  //   return 0
  // }

}

//test code
// cart = [{banana: "10"}, {apple: "20"}]
// item1Name = Object.keys(cart[0])[0]
// item1Price = cart[0][Object.keys(cart[0])[0]]
// console.log(item1Name)
// console.log(item1Price)

// cart = [{banana: "10"}, {apple: "20"}]
// item1Name = Object.keys(cart[0])[0]
// item1Price = cart[0][Object.keys(cart[0])[0]]
// console.log(cart)
// removeFromCart("banana")
// console.log(cart)


function removeFromCart(item) { //name of item that should be removed
  // write your code here
  var hasItem = 0

  if (cart && cart.length > 0) {

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
          hasItem = 1
          cart.splice(i,1)
          //console.log("Spliced!")
        }
    }

    if (hasItem == 0) {
      console.log("That item is not in your cart.")
    }

    return cart

  }
  else {
    console.log("That item is not in your cart.")
    return cart
  }

}

// cart = [{banana: "10"}, {apple: "20"}]
// placeOrder("123123")

function placeOrder(cardNumber) {
  // write your code here
    if (cardNumber) {
      //if card received, it should print out
      //"Your total cost is $71, which will be charged to the card 83296759"
      //then empty the cart array

      var totalCost = total()
      console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
      cart = []
    }
    else {
      //if no argument received, print out "Sorry, we don't have a credit card on file for you"
      console.log("Sorry, we don't have a credit card on file for you.")
    }

}
