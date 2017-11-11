var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random()*100 + 1)
  cart.push({[item]: itemPrice})
  console.log(`${item} has been added to your cart.`)
  return cart
}

addToCart('carrots')
addToCart('avocado')
addToCart('strawberries')
console.log(cart)

function viewCart() {

  var itemsAndPrices = []

  for (var i = 0; i < getCart().length; i++){
    var itemName = Object.keys(cart[i])
    var itemPrice = cart[i][itemName]
    itemsAndPrices.push(`${itemName} at $${itemPrice}`)
  }

  // cart is empty
  if (getCart().length===0) console.log("Your shopping cart is empty.")
  // cart has exactly 1 item
  else if (getCart().length===1) {
    console.log(`In your cart, you have ${itemsAndPrices}.`)
  }
  // cart has exactly 2 items
  else if (getCart().length===2){
    console.log(`In your cart, you have ${itemsAndPrices.join(" and ")}.`)
  }
  // cart has 3 or more items
  else {
    var sentence = "In your cart, you have "
    for (var i = 0; i < getCart().length - 1; i++){
      sentence += `${itemsAndPrices[i]}, `
    }
    console.log(sentence + `and ${itemsAndPrices[i]}.`)
  }
}
viewCart()

function total() {
  var totalPrice = 0;
  for (var i = 0; i < getCart().length; i++){
    var itemName = Object.keys(cart[i])
    totalPrice += cart[i][itemName]
  }
  return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < getCart().length; i++){
    console.log(cart[i])
    if (cart[i].hasOwnProperty(item)){
      delete cart[i]
      cart = cart.filter(Boolean)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) console.log("Sorry, we don't have a credit card on file for you.")
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
