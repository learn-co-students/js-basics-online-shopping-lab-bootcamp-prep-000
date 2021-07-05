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
 var newItem = { 'itemName': item, 'itemPrice': Math.floor(Math.random() * 100) + 1 }
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${ cart[0]['itemName'] } at $${ cart[0]['itemPrice'] }.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${ cart[0]['itemName'] } at $${ cart[0]['itemPrice'] }, and ${ cart[1]['itemName'] } at $${ cart[1]['itemPrice'] }.`
  } else {
    var message = "In your cart, you have "
    let i = 0
    while (i < cart.length - 1) {
      message += `${ cart[i]['itemName'] } at $${ cart[i]['itemPrice'] }, `
      i++
    }
    message += `and ${ cart[i]['itemName'] } at $${ cart[i]['itemPrice'] }.`
    return message
  }
}

function total() {
  // write your code here
  var total = 0
  for ( var i = 0; i < cart.length; i++ ) {
    total += cart[i]['itemPrice']
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for ( var i = 0; i < cart.length; i++ ) {
    if ( cart[i]['itemName'] === item ) {
      cart.splice(i, 1)
      return
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber > 0) {
    var cost = total()
    cart = []
    return `Your total cost is $${ cost }, which will be charged to the card ${ cardNumber }.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}

/*testObj = {'phil': 1}
console.log( Object.values(testObj) )

tempCart = [{ itemName: 'banana' , itemPrice: 10}]
console.log( Object.keys(tempCart) )
console.log( viewCart(tempCart) ) 
var tempCart = [{ itemName: 'banana' , itemPrice: 10}]
console.log(tempCart[0]['itemName']  ) */

//