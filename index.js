var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1)
//  cart = Object.assign({}, cart, { [item]: price } )
  cart[cart.length] = {[item]: price}
  console.log(`${item} has been added to your cart.`)
  return cart
}



function viewCart() {
  var key = ""
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return "Your shopping cart is empty."
  } else {
    var text = "In your cart, you have "
    var punct = " "
    for (let i=0; i < cart.length; i++) {
      if (i === cart.length-1) {
        if (cart.length !== 1) {text += "and "}
        punct = "."
      } else if (cart.length > 2) {
        punct = ", "
      }
      key = Object.keys(cart[i])[0]
      text += `${key} at \$${cart[i][key]}${punct}`
    }
    console.log(text)
    return text
  }
}


/*
viewCart()
addToCart("Almonds")
console.log(cart)
viewCart()
addToCart("Chocolate")
console.log(cart)
viewCart()
addToCart("Milk")
console.log(cart)
viewCart()
//*/

function total() {
  var tot = 0
  for (let i=0; i < cart.length; i++) {
    tot += cart[i][Object.keys(cart[i])[0]]
  }
  return tot
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      var c = cart.splice(i,1)
      return c
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  var tot = 0
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
    return cart
  } else {
     tot = total();
//     console.log(`tot = ${tot}`)
     console.log( `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.` )
    cart.length = 0
    return cart
  }
}
//placeOrder(67189463796)
