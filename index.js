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
  var price = Math.floor(Math.random() * 100 + 1);
  var obj = {};

  console.log(`${purchaseItem} has been added to your cart.`)

  obj[purchaseItem] = price

  cart.push(obj);

  return cart
}

function viewCart() {
  if (cart.length > 0) {
    for (let i = 0; i > cart.length; i++) {
        tempArray.push(cart[key])

        for (var key in cart) {
          if (cart.hasOwnProperty(key)) {
            console.log(`In your cart, you have ${key} at $${cart[key]}.`)
      }
    }
  }
} else if (cart.length <= 0) {
  console.log("Your shopping cart is empty.");
  }
}

/*function removeFromCart(removeItem) {
  if cart.hasOwnProperty(removeItem){

  }
}*/

function placeOrder(creditCardNum) {
  if (Number.isInteger(creditCardNum)) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  cart = []
}
