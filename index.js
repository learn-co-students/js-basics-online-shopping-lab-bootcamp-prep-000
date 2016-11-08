var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  /*cart.push({item: price})*/
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var newArray = new Array();
  for (var i = 0, l = cart.length; i < l; i++) {
    var item = Object.keys(cart[i])[0]
    var price = cart[i][item]
    newArray.push(`${item} at $${price}`)
  }
  if (cart.length === 0){
    console.log ("Your shopping cart is empty.")
  } else {
    console.log (`In your cart, you have ${newArray.join(', ')}.`)
  }
}
function removeFromCart(item){
  if (cart.hasOwnProperty(item) === false){
    console.log("That item is not in your cart.")
  } else {
    delete cart.item
    return cart
  }
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
