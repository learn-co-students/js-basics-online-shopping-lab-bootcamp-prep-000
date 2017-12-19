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
 var newItem = {}
 newItem[item] = Math.floor(Math.random() * (100 - 1) + 1)
 cart.push(newItem)
 
 console.log(`${item} has been added to your cart.`)
 
 return cart
}

function viewCart() {
  // write your code here
  var line = "In your cart, you have "
  
  if (cart.length >= 3) {
    var i = 0;
    for (; i < cart.length - 1; i++) {

      var name = Object.keys(cart[i])[0]

      line += `${name} at $${cart[i][name]}, `
    }
    var last = Object.keys(cart[i])[0]
    console.log(line + `and ${last} at $${cart[i][last]}.`)
  } else if (cart.length === 2) {
    var item1 = Object.keys(cart[0])[0]
    var item2 = Object.keys(cart[1])[0]
    console.log(`${line}${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`)
  } else if (cart.length === 1) {
    var temp = Object.keys(cart[0])
    console.log(`${line}${temp} at $${cart[0][temp]}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  var t = 0
  for (let i = 0; i < cart.length; i++) {
    t += parseInt(Object.values(cart[i]))
  }
  
  return t
}


function removeFromCart(item) {
  // write your code here
  var flag = false
  for (let i = 0; !flag && i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      flag = true
    }
  }
  if (!flag) {
    console.log("That item is not in your cart.")
    
    return cart
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    while(cart.length > 0) {
      cart.pop()
    }
  }
}
