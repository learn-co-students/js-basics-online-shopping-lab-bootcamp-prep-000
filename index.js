var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 100) + 1
 cart.push({[itemName]: itemPrice})
 console.log(`${itemName} has been added to your cart.` )
 return cart
} 
 
function viewCart() {
  var cl = cart.length
  var itemPrices = []
  
  for (let i = 0; i < cl; i++) {
    var prices = cart[i]
    var item = Object.keys(prices)[0]
    var price = prices[item]
    itemPrices.push(`${item} at \$${price}`)
  } 
  switch (itemPrices.length) {
    case 1: 
      break;
    case 2:
      itemPrices = itemPrices.join (' and ')
      break;
    default:
      itemPrices[cl-1] = 'and '.concat(itemPrices[cl-1])
      itemPrices = itemPrices.join(', ')
  }
  console.log(`In your cart, you have ${itemPrices}.`)
  if (cl === 0) {
    console.log('Your shopping cart is empty.')
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
      sum += cart[i][item]
    }
  }
  return sum 
}

function removeFromCart(itemName) {
  for (let i = 0, cl = cart.length; i < cl; i++) {
    for (let cartItems in cart[i]) {
      if (itemName === cartItems) {
        cart.splice(i,1)
        return cart
      }
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
} 
