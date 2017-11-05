var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random()*100)
  var product = {[itemName]: itemPrice}
  cart.push(product)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
    var array = []
    var productName = []
    var productPrice = []
    var cartRead = [`In your cart, you have `];

  if (cart.length==0){
      console.log(`Your shopping cart is empty.`)
  }

  else if (cart.length==1){
    productName = Object.keys(cart[0])
    productPrice = cart[0][productName]
    console.log(`In your cart, you have ${productName} at $${productPrice}.`)
  }

  else if (cart.length==2){
    for(var i=0; i<cart.length; i++){
      productName[i] = Object.keys(cart[i])
      productPrice[i] = cart[i][productName[i]]
      array[i] = `${productName[i]} at $${productPrice[i]} `
    }
    array[cart.length-1] = `and ${productName[cart.length-1]} at $${productPrice[cart.length-1]}.`
    cartRead[0] = cartRead[0] + array[0] + array[1]
    console.log(cartRead[0])
  }

  else {
    for(var i=0; i<cart.length; i++){
      productName[i] = Object.keys(cart[i])
      productPrice[i] = cart[i][productName[i]]
      array[i] = `${productName[i]} at $${productPrice[i]}, `
      array[cart.length-1] = `and ${productName[cart.length-1]} at $${productPrice[cart.length-1]}.`
      cartRead[0] = cartRead[0] + array[i]
    }
    console.log(cartRead[0])
  }
}

function total() {
  var total = 0
  var productName = []
  var productPrice = []

  for(var i=0; i<cart.length; i++){
    productName[i] = Object.keys(cart[i])
    productPrice[i] = cart[i][productName[i]]
    total = total + productPrice[i]
  }
  return total
}

function removeFromCart(item) {
var x = 0;

  for (var i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item) == true){
      cart.splice(x,x)
      return cart
      break
    }
    else {
      x = x+1
      continue
    }}
    if (x==cart.length){
      console.log('That item is not in your cart.')
      return cart
    }
    else {
      return cart
    }
  }



function placeOrder(cardNumber) {
  var totalAmt = total()
  if (cardNumber == null){
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${totalAmt}, which will be charged to the card ${cardNumber}.`)
    for (var i=0;i<cart.length;i++){
      cart.shift()
    }
  }
}
