var cart = [];
//var itemName = "daikon"
//var cart = [ {nuts: 4}, { mangos: 6} ]
//var cart = [ { pears: 6} ]
//var cart = [ {oranges: 4}, { pears: 6}, { bananas: 12}, { cherries: 100} ]

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

//addToCart("vanilla");
//addToCart("watermelon");
//addToCart("yams");


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
    console.log(items)
    console.log (message + items[0] + " and " + items[1] + ".")
  }
  else if (length >= 3) {
    console.log(message + items.slice(0,length-1).join(", ") + ", and " + items[length-1] + ".");
  }
 }


//viewCart(cart)

function total() {
  let totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
        //console.log(cart[i])
        totalCost += cart[i][item]
    }
  }
  //console.log(totalCost)
  return totalCost
}

//total()

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var matchedItem = false
    if (cart[i].hasOwnProperty(item) === true) {
      var index = cart.indexOf(cart[i])
      cart.splice(index,1)
      matchedItem = true
    }
  }
  if (matchedItem === false) {
    console.log("That item is not in your cart.")
  }
  console.log(cart)
  return cart
}

//removeFromCart("watermelon")
//removeFromCart("nuts")

function placeOrder(cardNumber) {
  // write your code here
}
