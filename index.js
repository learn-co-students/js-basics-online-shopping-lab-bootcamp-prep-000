var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var wishlist = {[item]: Math.floor((Math.random() * 100)) + 1}
  cart.push(wishlist)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length === 1) {
    for (var i = 0; i < 1; i++) {
      for (var element in cart[i]) {
        console.log(`In your cart, you have ${element} at $${cart[i][element]}.`)
      }
    }
  }
  else if (cart.length === 2) {
    var result = "In your cart, you have "
    for (var i = 0; i < 2; i++) {
      for (var element in cart[i]) {
        result += `${element} at $${cart[i][element]}`
        if (i == 1) {
          result += "."
        }
        else {
          result += " and "
        }
      }
    }
    console.log(result)
  }
  else if (cart.length > 2) {
    var result = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      for (var element in cart[i]) {
        result += `${element} at $${cart[i][element]}`
        if (i == cart.length-1) {
          result += '.'
        }
        else if (i == cart.length-2) {
          result += ", and "
        }
        else {
          result += ", "
        }
      }
    }
    console.log(result)
  }
}




function total() {
  var result = 0
  for (var element in Object.keys(cart)) {
    var objectN = cart[element]
    for (var key in objectN) {
      var price = parseInt(objectN[key])
      result = result + price
    }
  }
  return result
  // write your code here
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(`${item}`)) {
      cart.splice(i,1)
      return cart;
    }
  }
  console.log("That item is not in your cart.")
  return cart
  // write your code here
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
