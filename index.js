var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    const newShoppingCart = []
    for (var i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])
      let price = cart[i][item]
      newShoppingCart.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${newShoppingCart.join(', ')}.`)
  }
}

function removeFromCart(itemYouWantRemoved) {
  var totalItemsYouWantRemovedInYourCart = 0;
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(itemYouWantRemoved)) {
        cart.splice([i],1)
        totalItemsYouWantRemovedInYourCart++
      } 
   }

  if (totalItemsYouWantRemovedInYourCart === 0) {
  	console.log('That item is not in your cart.')
  } else {
  	return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  }
  return cart
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
