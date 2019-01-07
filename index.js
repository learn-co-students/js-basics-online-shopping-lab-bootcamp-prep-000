var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // Price is a random integer between 1 and 100
   var itemPrice = Math.floor((Math.random() * 99) + 1)
 // Use item string to create new object representing item. Should have one key-pair value, itemName: price
 // As more items are added, the object should expand
   cart.push({[item]: itemPrice})
 // Upon successful addition, print ``<itemName> has been added to your cart.`
   console.log(`${item} has been added to your cart.`)
 // Return updated cart to console
   return cart
 }

function viewCart() {
  // If cart empty, "Your shopping cart    9w#is empty."
  var cartStuff = []
  for (var i = 0; i < cart.length; i++) {
    var itemObject = cart[i]
    var itemKey = Object.keys(itemObject)[0]
    var itemValue = itemObject[itemKey]
    cartStuff.push(`${itemKey} at $${itemValue}`)
  }
  if (!cart.length) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length ===1) {
     console.log(`In your cart, you have ${cartStuff[0]}.`);
  } else if (cart.length ===2) {
    console.log(`In your cart, you have ${cartStuff[0]} and ${cartStuff[1]}.`);
  } else {
    cartStuff[cartStuff.length - 1] = `and ${itemKey} at $${itemValue}`
    console.log(`In your cart, you have ${cartStuff.join(', ')}.`);
  }

}

function total() {
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    var totalCost = totalCost + cart[i][Object.keys(cart[i])[0]]
  }
return totalCost
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
