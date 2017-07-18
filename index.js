var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemObj = {}
  itemObj[itemName] = Math.floor(Math.random() * 100)
  cart.push(itemObj)
  console.log(itemName + " has been added to your cart.")
  //console.log(itemObj)
  return cart
}

function viewCart() {
  var items = [];
  var message = "In your cart, you have ";
  if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.unshift(item + " at $" + cart[i][item])
        //console.log(items)
      }
    }
  }
  var length = items.length;
  if (length === 1) {
    console.log(message + items[0] + ".")
  }
  else if (length === 2) {
    //console.log(items)
    console.log (message + items[0] + " and " + items[1] + ".")
  }
  else if (length >= 3) {
    console.log(message + items.slice(0,length-1).join(", ") + ", and " + items[length-1] + ".");
  }
 }

function total() {
  let totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
        totalCost += cart[i][item]
    }
  }
  return totalCost
}



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


// viewCart(cart)
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
