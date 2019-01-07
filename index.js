var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {}
  obj[item] = Math.floor((Math.random() * 100) + 1)
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartTotal = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } for (var i = 0; i < cart.length; i += 1) {
    var obj = cart[i]
    var cartItem = Object.keys(obj)
    var itemPrice = obj[cartItem]
    cartTotal.push(`${cartItem} at $${itemPrice}`)
  } if (cart.length === 1) {
    console.log(`In your cart, you have ${cartTotal}.`)
  } else if (cart.length === 2) {
    var cartTotal = cartTotal.join(" and ")
    console.log(`In your cart, you have ${cartTotal}.`)
  } else if (cart.length > 2) {
    var cartTotal = cartTotal.slice(0, -1).join(", ") + ", and " + cartTotal.slice(-1)
    console.log(`In your cart, you have ${cartTotal}.`)
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i += 1) {
    var obj = cart[i]
    var value = obj[Object.keys(obj)]
    total += value
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i += 1) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

// function removeFromCart(item) {
//   var i = 0
//   while (i < cart.length) {
//     for (Object.keys(cart[i += 1]) === item) {
//       if (cart[i].hasOwnProperty(item)) {
//         cart.splice(i, 1)
//       } else {
//         console.log("That item is not in your cart.")
//       }
//     }
//     return cart
//   }
// }
//     if (cart[i += 1].hasOwnProperty(item)) {
//       cart.splice(i, 1)
//     } else {
//       console.log("That item is not in your cart.")
//     }
//     return cart
//   }
// }

function placeOrder(cardNumber) {
  var cartTotal = total()
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  return cart
}
