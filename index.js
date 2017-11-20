var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)
  var newItem = {[item]: itemPrice};
  cart.push(newItem)
  console.log(item + ' has been added to your cart')
  return cart
}

function viewCart() {
  var returnStatement = 'In your cart, you have '
  var itemObj = {}
  var itemArray = []
  var item = undefined
  var itemPrice = undefined
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }else if(cart.length === 1) {
    for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      returnStatement = `in your cart, you have ${item} at $${itemPrice}`
      return returnStatement
    }
    //console.log(returnStatement)
  }else if(cart.length === 2) {
    for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      if(i === 1) {
        returnStatement = returnStatement + ` and ${item} at $${itemPrice}`
        return returnStatement
      }
      returnStatement = returnStatement + `${item} at $${itemPrice}`
    }

  }else if(cart.length > 3) {

  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
