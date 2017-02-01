var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function addToCart(purchaseItem) {
  var price = Math.random() * (100-0) + 0
  price = Math.floor(price)

  cart.push({[purchaseItem]: price})
  console.log(`${purchaseItem} has been added to your cart.`)
  return getCart()
}
//addToCart("socks")
//addToCart("puppy")
//addToCart("iPhone")

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
    return cart;
  }
    var cartString = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      var price = (cart[i][item])
        if (i === cart.length-1) {
          cartString = cartString + `${item} at $${price}.`
        } else {
          cartString = cartString + `${item} at $${price}, `
        }
    }
    console.log(cartString)
}


function placeOrder(cardNumber) {
	if (!cardNumber) {
    	console.log("We don't have a credit card on file for you to place your order.")
	} else {
    	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
	}
  cart = []
}

function removeFromCart(removeItem) {
  var isHere = false
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])
  	  if (removeItem === `${item}`) {
  	    cart.splice(i, 1)
		    isHere = true
  	  }
  }
  if (isHere) {
    return cart
  } else {
  	console.log("That item is not in your cart.")
  }
}
