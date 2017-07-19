var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//add items to the cart
function addToCart(itemName) {
  var itemObj = {}
  itemObj[itemName] = Math.floor(Math.random() * 100)
  cart.push(itemObj)
  console.log(itemName + " has been added to your cart.")
  //console.log(itemObj)
  return cart
}

// view the contents of the cart and print statements
function viewCart() {
  //console.log(cart)
  var message = "In your cart, you have";
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    }
    else if (cart.length === 1) {
      console.log(message + " " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + ".")
    }
    else if (cart.length >= 2) {
      var items = []
      for (var i = 0; i < cart.length; i++) {
        var itemName = Object.keys(cart[i])
        var price = cart[i][itemName]
        items.push(itemName + " at $" + price)
        if (i != cart.length-1) {
          cart.length === 2 ? message += " " + items[i] : message += (" " + items[i] + ",")
          }
        else {
          message += (" and " + items[i] + ".")
        }
    }
    console.log(message)
  }
}


//calculate the totalCost of all items in the cart
function total() {
  let totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
        totalCost += cart[i][item]
    }
  }
  return totalCost
}


//remove select items from the cart
function removeFromCart(item) {
  console.log("Your shopping cart" , cart )
  console.log("removing " + item)
  var matchedItem = false
  for (var i = 0; i < cart.length; i++) {
    var index = cart.indexOf(cart[i])
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(index,1)
      matchedItem = true
      console.log("Successfully removed " + item)
    }
  }
  if (matchedItem === false) {
    console.log("That item is not in your cart.")
  }
  console.log("Your updated shopping cart", cart)
  return cart
}

//place an order with a credit card and empty the cart
function placeOrder(cardNumber) {
  if(arguments.length === 0) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    var totalCost = total()
    console.log("Your total cost is $" + totalCost + ", which will be charged to the card " + cardNumber + ".")
    return cart = [];
  }
}


//viewCart(cart)
// total()
// addToCart("vanilla");
// viewCart(cart)
// addToCart("watermelon");
// viewCart(cart)
// addToCart("yams");
// viewCart(cart)
// removeFromCart("watermelon")
// removeFromCart("yams")
// removeFromCart("yams")
