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
 var price = Math.floor(Math.random() * 100) + 1
 cart.push({ [item]: price })
 console.log(`${item} has been added to your cart.`)
 return cart
}

function total() {
  // write your code here
  var total = 0
  var item = ''
  for (var i=0; i < cart.length; i++) {
    item = Object.keys(cart[i])
    total += cart[i][item]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var key = ''
  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return
  } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart.length = 0
      return
  }
}

function viewCart() {
  // write your code here
  var item = ''
  var cart_items = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  } else if (cart.length === 1) {
      item = Object.keys(cart[0])
      console.log(`In your cart, you have ${item} at $${cart[0][item]}.`)
      return
    } else if (cart.length === 2) {
        for (var i=0; i < cart.length; i++) {
          item = Object.keys(cart[i])
          cart_items.push(`${item} at $${cart[i][item]}`)
        }
        console.log(`In your cart, you have ${cart_items[0]} and ${cart_items[1]}.`)
        return
      } else {
          for (var i=0; i < cart.length; i++) {
            item = Object.keys(cart[i])
            if ((i + 1) === cart.length) {
              cart_items.push(`and ${item} at $${cart[i][item]}`)
            } else {
                cart_items.push(`${item} at $${cart[i][item]}`)
              }
          }
          console.log(`In your cart, you have ${cart_items.join(', ')}.`)
          return
        }
}
