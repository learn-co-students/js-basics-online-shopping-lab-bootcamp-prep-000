var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var items =  {itemName: item, itemPrice: Math.floor(Math.random() * (100 - 1) + 1)}
 cart.push(items)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var first = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `
    var second = ``
    for (let i = 0; i < cart.length - 1; i++) {
      second = `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    var third =  `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return first + second + third
  }
}

function total() {
  var sumTotal = 0
  for (let i = 0; i < cart.length; i++) {
    sumTotal += cart[i].itemPrice
  }
  return sumTotal
}

function removeFromCart(item) {
  var itemArray = []
  for (var i = 0; i < cart.length; i++) {
    itemArray.push(cart[i].itemName)

  }
  var itemIndex = itemArray.indexOf(item)
  if ([itemIndex] > -1) {
     cart.splice([itemIndex], 1)
     return cart
   } else {
     return `That item is not in your cart.`
   }
  }

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var end = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return end
  }
  // write your code here
}
