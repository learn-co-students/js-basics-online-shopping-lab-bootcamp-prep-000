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
 cart.push( {[item] : Math.floor(Math.random() * 100 + 1)} )
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var cart = getCart()
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var list = `In your cart, you have`
    var sep = `,`
    var and = ` and`
    let len = cart.length
    for (let i = 0; i < len; i++) {
      var key = Object.keys(cart[i])[0]
      var val = cart[i][key]
      var item = ` ${key} at $${val}`
      if (len === 1) {
        list = `${list}${item}.`
      } else {
        //list = `${list}${item}`
        if (i === len - 1 && len === 2) {
          list = `${list}${and}${item}.`
        } else if (i === len - 1 && len > 2) {
          list = `${list}${sep}${and}${item}.`
        } else if (i === 0) {
          list = `${list}${item}`
        } else {
          list = `${list}${sep}${item}`
        }
      }
    }
    console.log(list)
  }
}
//cart = [{'yam':43},{'pot':87},{'ban':6}]
//cart = [{'yam':43},{'pot':87}]
//cart = [{'yam':43}]
//viewCart()

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    let cartItem = getCart()[i]
    let cartKey = Object.keys(cartItem)[0]
    let cartValue = cartItem[cartKey]
    total += cartValue
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var inCart = false
  for (let i = 0; i < cart.length; i++) {
    if (getCart()[i].hasOwnProperty(item)) {
      inCart = true
      cart.splice(i,1)
    }
  }
  if (!inCart) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments.length === 0) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
