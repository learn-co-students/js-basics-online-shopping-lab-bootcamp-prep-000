var cart = [];

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

  return t
}

function getCart () {
  return cart
}

function addToCart (item) {
  var price = Math.floor(Math.random() * 100)
  var newItem = {} //create object
  newItem[item] = price //assign key value pairs
  cart.push(newItem) //push key value to cart array
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart () {
  //var cartItems = Object.keys(cart)

  //create empty objects to store items and prices
  var items = []
  var prices = []
  var message = "In your cart, you have "

  //loop through objects in cart array to store items and prices in their respective arrays
  for (var i = 0; i < cart.length; i++) {
    var itemObject = cart[i] //store object in variable (cart item and price)

    //Loop to get key from item in cart array and price from values
    for (var x in itemObject) {
      items.push(x) //push key to item
      prices.push(itemObject[x]) //push value to prices array
    }
  }

  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var j = 0; j < cart.length; j++) {
        if(j === 0) {
          message += items[j] + " at $" + prices[j]
        } else if (cart.length === 2 && j === 1) {
          message += " and " + items[j] + " at $" + prices[j]
        } else if (j < cart.length && j !== 0) {
          message += ", " + items[j] + " at $" + prices[j]
        } else if (j === cart.length && j < 2) {
          message += "and " + items[j] + " at $" + prices[j]
        }
    }
}

console.log(message + ".")

}

    //var cartPrices = Object.values(cart)
//for (var i = 0; i < cart.length;  i++) {
  //var item = Object.keys(cart[i])
  //var price = Object.values(cart[i])
  //var object = cart[i]
  //for (var cartItems in object) {
  //list += cartItems + " at " + object[cartItems] + ", "
//}
//}
    /*for (var cartItems in cart) {
      list += cartItems + " at " + cart[cartItems] + ", "
    }*/





  //  console.log(list)
  //}
  //var listSlice = list.slice(0, list.length - 2) + "."



function removeFromCart(cartItem) {

  //Gets key from each object in cart array
  var itemArray = [] //create empty array to store keys from cart array
  var hits //create empty var for search of carts arrays hits
  for (var i = 0; i < cart.length; i++) {
    var itemObject = cart[i] //store object in variable (cart item and price)

    //Loop to get key from item in cart array
    for (var x in itemObject) {
      itemArray.push(x) //push key to itemArray
    }
  }
//If cartItem is found in itemArray, remove item from cart at the position found in itemArray(these are the same since cart and itemArray length are equal)
  for (var y = 0; y < itemArray.length; y++) {
    if (itemArray[y] !== cartItem && y === cart.length - 1) {
      console.log("That item is not in your cart.")
      //return cart
    } else
      if(itemArray[y] === cartItem) {
        //var index = cart.indexOf(cartItem)
        //cart.splice(index,1)
        cart.splice(y,1)
        return cart
    }
  }

}
/*for(var x; x < cart.length; x++) {
  if(Object.keys(cart[x]) === cartItem ) {
      var i = cart.indexOf(cartItem)
      cart.splice(i,1)
      return cart
    } else {
      console.log('That item is not in your cart.')
      return cart
    }

  }*/








/*function placeOrder(cardNumber) {
  var cartTotal = total()
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var finalOrder = "Your total cost is " + cartTotal + ", which will be charged to the card " + cardNumber + "."
    console.log(finalOrder)
  }
  cart.length = 0
}*/

function placeOrder(cardNumber) {
    if (isNaN(cardNumber) === true) {
      console.log("We don't have a credit card on file for you to place your order.")
    } else {console.log( "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  }
  cart.length = 0

}
