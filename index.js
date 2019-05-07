var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 101)
    var cartItem = Object.assign({}, {[item]:itemPrice})
    cart.push(cartItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

// cart = [{pear: 30}]

function viewCart(){
if (cart.length === 0) {console.log("Your shopping cart is empty.") }
else if ( cart.length === 1) {
  var itemName = Object.keys(cart[0])
  var itemPrice = cart[0][itemName]
  console.log (`In your cart, you have ${itemName} at $${itemPrice}.`)
  }
  else if (cart.length === 2) {
    var itemName = Object.keys(cart[0])
    var itemPrice = cart[0][itemName]
    var itemN = Object.keys(cart[1])
    var itemP = cart[1][itemN]
    console.log (`In your cart, you have ${itemName} at $${itemPrice} and ${itemN} at $${itemP}.`)
  }
  else if (cart.length >= 3) {
    var cartLoop = []
    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])
      var itemPrice = cart[i][itemName]
      if (cart.length - 1 === i){
        var itemList = `and ${itemName} at $${itemPrice}`
      }
      else {
      var itemList = `${itemName} at $${itemPrice}`
    }
    cartLoop.push(itemList)
    }
    console.log(`In your cart, you have ${cartLoop.join(", ")}.`)
}
}

//
function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])
    var itemPrice = cart[i][itemName]
    sum = sum + parseInt(`${itemPrice}`)
  }
return sum
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])
    var currentItemObj = cart[i]
    if (currentItemObj.hasOwnProperty(item)) {
      cart = cart.slice(0,i).concat(cart.slice(i+1))
          return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {console.log(`Sorry, we don't have a credit card on file for you.`)}
  else {
    console.log(`Your total cost is $` + total() + `, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
