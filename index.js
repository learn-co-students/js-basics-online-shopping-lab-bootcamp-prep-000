var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var elem = {[item]:itemPrice}
  cart.push(elem)
  console.log(`${item} has been added to your cart.`)
  return cart
}


function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }else{
    var result = "In your cart, you have "
    for (var ind in cart) {
      var item = Object.keys(cart[ind])
      var value = item.map(e => cart[ind][e])
      if (cart.hasOwnProperty(ind)) {
        var sep = (ind == (cart.length-1)) ? "." : ((ind == (cart.length-2)) ? ((cart.length == 2) ? " and " : ", and ") : ", ")
        result += item + ' at $' + value + sep
      }
    }
    console.log(result)
  }
}

function total() {
  var total = 0
  for (var ind in cart) {
    var value = Object.keys(cart[ind]).map(e => cart[ind][e])
    total += parseInt(value)
  }
  return total
}

function removeFromCart(item) {
  let itemInCart = false
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      l--;
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return false
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
