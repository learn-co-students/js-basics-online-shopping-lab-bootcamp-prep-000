var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {};
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  itemObject[item] = itemPrice;
  cart.push(itemObject)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length === 1) {
    var cartOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(cartOneItem)

  } else if (cart.length === 2) {
    var cartTwoItems = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
    console.log(cartTwoItems)
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
          }
          var cartThreePlusItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(cartThreePlusItems)
  }
}

  
function total() {
  var priceList = [];
  var priceTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i][Object.keys(cart[i])];
    priceList.push(itemPrice);
} for (var j = 0; j < priceList.length; j++) {
    priceTotal += priceList[j]
} return priceTotal
  
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
      console.log(`Sorry, we don\'t have a credit card on file for you.`)
    }
return cart;
}
