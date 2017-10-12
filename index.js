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
  // write your code here
  if (cart.hasOwnProperty(item) === False) {
      console.log('That item is not in your cart')
      return cart
  } else {
      var i = cart.indexOf(item)
      cart.splice(i, 1)
      return cart
  }
  }
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
//
// }
