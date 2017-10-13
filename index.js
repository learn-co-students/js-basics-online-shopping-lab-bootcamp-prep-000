var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var obj = new Object()
    obj[item] = Math.floor(Math.random() * (100 - 1) + 1)
    cart = [...cart, obj];
    console.log(`${item} has been added to your cart.`)
    return cart
}

//from call below
function viewCart() {
  let i = 0;
  if (cart.length === 0) {
      console.log('Your shopping cart is empty.')
  } else {
    var new_cart = []
      for (let i = 0; i < cart.length; i++) {
          var key = Object.keys(cart[i])[0]
          new_cart = [...new_cart, `${key} at $${cart[i][key]}`]
      }
  }
  if (cart.length === 1) {
      console.log(`In your cart, you have ${new_cart}.`)
  } else if (cart.length === 2) {
      console.log(`In your cart, you have ${new_cart.join(' and ')}.`)
  } else if (cart.length >= 3) {
      var last = new_cart.pop()
      console.log(`In your cart, you have ${new_cart.join(', ')}, and ${last}.`)
  }
};


function total() {
  var total = 0
  var prices = []
  for (let i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0]
    total += (cart[i][key])
  }
  return total
}


function removeFromCart(item) {
  var truth = []
  var remove = []
  for (let i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      truth = [...truth, 'in']
      remove = [...remove, i]
    } else {
      truth = [...truth, 'out']
    }
  }
  if (truth.indexOf('in') > -1) {
    cart.splice(remove[0], 1)
    return cart
  } else {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
    var c = cardNumber
    var t = total()
    if (!c) {
      console.log(`Sorry, we don't have a credit card on file for you.`)
    } else {
        console.log(`Your total cost is $${t}, which will be charged to the card ${c}.`)
        cart.length = 0
    }
  }
