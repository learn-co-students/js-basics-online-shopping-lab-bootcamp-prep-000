// left a lot of scrap code here to see what worked and what didn't; also got some really wonky error returns

var cart = [ ]

function getCart() {
  return cart
}

//function randoNumb() {
  //Math.floor(Math.random() * 100)
//}

function addToCart(item) {
  var aRay = {}
  aRay[item] = Math.floor(Math.random() * 100).toString() // this give a leading zero to t but I found some code to remove it
  //aRay[item] = randoNumb()
  cart.push(aRay)
  console.log(`${item} has been added to your cart.`) // the error spy was never called with [ ] means console.log did not print out exactly what the test wants. i proved this by changing the string here to "carty" and seeing the error.
  return cart
}


    //Not sure why I had to go this way to make it work.  It looked like the formula randoNumb() would
    //was successfully giving me an integer for price, but the test itself expected "undefined",
    //so I had to go this route of setting an undefined variable price.  And totalling test below
    // expects Nan.  Left some scrap code here for future reference.




function viewCart() {
    var newArray = [ ]
    if (cart.length > 0) {
      for (var i = 0, l = cart.length; i < l; i++) {
        for (var itemName in cart[i]) {
          var toAdd = ` ${itemName} at $${cart[i][itemName]}`
          newArray.push(toAdd)
        }
      }
      var newToAdd = newArray.toString()
      //console.log(`In your cart, you have ${itemName} at $${cart[i][itemName]}.`)
      console.log("In your cart, you have" + newToAdd + ".")
    } else {
      console.log("Your shopping cart is empty.")
    }
}


function removeFromCart(item) {
  if (cart.length > 0) {
    //if (cart.hasOwnProperty(item)) {
      //cart.shift()
    //}
    for (var i = 0, l = cart.length; i < l; i++) {
      //for (var item in cart[i]) {
      if (cart[i].hasOwnProperty([item])) {
        cart.shift()
      }
    }
  } else {
    console.log("That item is not in your cart.")
  }
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  t = t.replace(/^0+/, '') // this got rid of the leading zero in the t number
  return t
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) { // this got the spy message to disappear
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  setCart([])
}

//Having a hard time understanding why it seems to be ok that 'total' is Nan.
