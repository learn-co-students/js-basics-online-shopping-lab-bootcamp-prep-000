var cart= []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart () {
  return cart
}
function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemPrice = {}
  var itemPriceKeys = Object.keys (itemPrice)
  itemPriceKeys.push (item)
  itemPrice[itemPriceKeys] = price
  cart.push(itemPrice)
  console.log (itemPrice)
  console.log(item +" has been added to your cart.")
  return cart
}

function viewCart () {
var cartpairs= []
for (var i = 0; i<cart.length; i++) {
for (var x in cart[i])
{
cartpairs.push (" " + x + " at " + "$" + cart[i][x])
}
}
if (cart.length == 0) {
  console.log ("Your shopping cart is empty.")
}
else {
      console.log( "In your cart, you have" + cartpairs + ".")
    }
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item) == true) {
        cart.splice (i, 1)
        return cart
      }
    }
      console.log("That item is not in your cart.")
  }

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)== true) {
    console.log( "We don't have a credit card on file for you to place your order.")
  }
    console.log ("Your total cost is " + "$" + total() + ", which will be charged to the card " + cardNumber + ".")
    cart= []
  }
