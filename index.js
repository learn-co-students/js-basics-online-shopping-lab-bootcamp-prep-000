var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 })

 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) return "Your shopping cart is empty."
  var shopList = "In your cart, you have"

  let i = 0
  do {
    var item = ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`

    // if the array has more then 1 item
    if (i > 0) {
          shopList += ','
    }
    // if it's the last item
    if (i > 0 && i === cart.length - 1) {
        shopList += ` and`
    }
    shopList += item
    i++
  } while(i < cart.length)


  shopList += '.'
  return shopList
}

function total() {
  var sum = 0
  var cart = getCart()
  var cartLength = cart.length

  for (let i = 0; i < cartLength; i++) {
    console.log(cart[i].itemPrice)
      sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var cart = getCart()
  var itemExist = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      itemExist = true
      break
    }
  }

  if (!itemExist) return "That item is not in your cart."

}

function placeOrder(cardNumber) {
  if (!cardNumber) return "Sorry, we don't have a credit card on file for you."

  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart([])
  return message
}
