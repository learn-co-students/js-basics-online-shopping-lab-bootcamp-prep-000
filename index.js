var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice()
{
  return Math.floor(Math.random() * (99) + 1)
}

function addToCart(item) {
  var item_obj = { [item]: getRandomPrice()}
  cart.push(item_obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function punctuationNeeded(i,length)
{

  if(length === 2 && i === 0)
  {
    return " "
  }
  else
  {
    return i < length - 1 ? ", " : "."
  }
}

function viewCart() {
  if(cart.length > 0) {
    var cart_items_list = "In your cart, you have "
    for(let i = 0; i < cart.length; i++) {
      var item = cart[i]
      var cart_item_key = Object.keys(item)[0]
      if(i === cart.length - 1 && cart.length > 1) {
        cart_items_list += 'and '
      }
      cart_items_list += `${cart_item_key} at $${item[cart_item_key]}${punctuationNeeded(i,cart.length)}`
    }
    console.log(cart_items_list)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var cartPrice = 0
  for(let i = 0; i < cart.length; i++) {
    var item = cart[i]
    var cart_item_key = Object.keys(item)[0]


    cartPrice += item[cart_item_key]
  }
  return cartPrice
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    var thisItem = cart[i]
    thisItem = Object.keys(thisItem)[0]
    if(thisItem === item) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
      console.log(`Your total cost is $${calcTotal()}, which will be charged to the card ${cardNumber}.`)
      cart = []
  }
}

function calcTotal() {
  var total = 0;
  for(let i = 0; i < cart.length; i++) {
    var thisItem = cart[i]
    var thisItemKey = Object.keys(thisItem)[0]
    var thisItemCost = parseInt(thisItem[thisItemKey])

    total += thisItemCost
  }
  return total
}
