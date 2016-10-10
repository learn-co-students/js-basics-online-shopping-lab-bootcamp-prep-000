var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  var x = []
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      x.push(`${item} at $${cart[i][item]}`);
    }
  }
  console.log(`In your cart, you have ${x.join(", ")}.`)
}

function removeFromCart(item) {
  let itemInCart = false
  for (var i=0;i<cart.length;i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,1)
        itemInCart = true
        return cart
      }
  }
  if (!itemInCart) {
        console.log("That item is not in your cart.")
  }
  
}

function placeOrder(cardNumber) {
  if (cardNumber === null || cardNumber === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
  return cart;
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
