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
 var max = 100
 var min = 1
 var itemPrice = Math.floor(Math.random() * (max - min)) + min
 var newCartItem = {[item]: itemPrice}
 cart.push(newCartItem)
 console.log(`${item} has been added to your cart.`)
 
 return cart
}

function viewCart() {
  // write your code here
  var cartLength = cart.length
  var info = 'In your cart, you have '
  var item, itemKeys, itemKey, position;
  
  if (cartLength) {
    for (let i=0; i<cartLength; i++) {
      item = cart[i]
      itemKeys = Object.keys(item)
      itemKey = itemKeys[0]
      position = i + 1
      
      if (cartLength == 1) {
        info += `${itemKey} at $${item[itemKey]}.`
      }
      else if (cartLength == 2) {
        if (position == cartLength) {
          info += `and ${itemKey} at $${item[itemKey]}.`
        }
        else {
          info += `${itemKey} at $${item[itemKey]} `
        }
      }
      else {
        if (position == cartLength) {
          info += `and ${itemKey} at $${item[itemKey]}.`
        }
        else {
          info += `${itemKey} at $${item[itemKey]}, `
        }
      }
    }
  }
  else {
    info = 'Your shopping cart is empty.'
  }
  console.log(info) 
}

function total() {
  // write your code here
  var cartLength = cart.length
  var total = 0;
  var item, itemKeys, itemKey, position;
  
  for (let i=0; i<cartLength; i++) {
    item = cart[i]
    itemKeys = Object.keys(item)
    itemKey = itemKeys[0]
    total += item[itemKey]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var cartLength = cart.length
  var itemInner;
  
  for (let i=0; i<cartLength; i++) {
    itemInner = cart[i]
    if (itemInner && itemInner.hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }
  if (cartLength == cart.length) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var cost = total()
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}

addToCart('lemons');
addToCart('apples');
addToCart('potatos');
viewCart();

