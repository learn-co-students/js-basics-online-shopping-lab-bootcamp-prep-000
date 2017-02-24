var cart = [];

function getCart() {
  return cart
}

let itemAndPriceList = {}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({ [item]: price })
    console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    var cartStatus = []
    var item = Object.keys(itemAndPriceList)
    for (var item in itemAndPriceList) {
    cartStatus.push(` ${item} at $${itemAndPriceList[item]}`)
  }
  console.log("In your cart, you have" + cartStatus + ".")
 }
}

// function removeFromCart(item) {
//   for (var item in itemAndPriceList) {
//     if (itemAndPriceList.hasOwnProperty(item)) {
//       cart.splice(item, 1);
//     }
//       console.log('That item is not in your cart.')
//     }
//   }

  function removeFromCart(item) {
    cart.forEach((line, index) => {
      if (line.hasOwnProperty(item)) {
        cart.splice(index, 1);
        return cart
      }
    })
        console.log('That item is not in your cart.')

    }


function placeOrder (creditCard) {
  if (!creditCard) {
   console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
  }
  return cart = []
}

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
