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

function addToCart(item) {
  let price = Math.floor( Math.random() * 100 + 1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let cartDetails = [];

  if (cart.length > 0) {
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var itemName in cart[i]) {
        cartDetails.push(` ${itemName} at $${cart[i][itemName]}`)
      }
    } console.log(`In your cart, you have${cartDetails}.`)
  } else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      return cart;
    } else {
      if (i === l - 1) {
      console.log(`That item is not in your cart.`);
          }
        }
      }
    }
