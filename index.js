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
  let value = Math.floor(Math.random() * 100) + 1
  let newItem = Object.assign({}, {itemName: item}, {itemPrice: value})
  getCart().push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  const cartListing = []

  if (cart.length == 0) {
    return `Your shopping cart is empty.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      if ( (i == cart.length-1) && (cart.length > 1)) {
        cartListing.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }else {
        cartListing.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }

    return `In your cart, you have ${cartListing.join(', ')}.`
  }
}



function total() {
  // write your code here
  let cartTotal = 0
  for (var i = 0; i < getCart().length; i++) {
    cartTotal += getCart()[i].itemPrice
  }
  return cartTotal
}


function removeFromCart(itemName) {
  // write your code here
    for (var i = 0; i < getCart().length; i++) {

      if (getCart()[i].itemName === itemName) {

          cart.splice(i, 1)
          return cart

          // var itemIndex = i
          // var newCart = []
          // for (var i = 0; i < itemIndex; i++) {
          //   newCart.push(cart[i])
          // }
          //
          // for (var i = itemIndex+1; i <= cart.length; i++) {
          //   newCart.push(cart[i])
          // }
          //
          // return newCart
      }

    return `That item is not in your cart.`
}

}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var orderTotal = total()
    setCart([])
    return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`
  }
}
