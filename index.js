var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
 var carString = 'In your car, you have'
 if(cart.length <= 0) {
   console.log("Your shopping cart is empty.")
 } else {
   for (var i = 0; i < cart.length; i++) {
     cartString += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`
     if (i < cart.length-1) {
       cartString += ', '
     } else {
       cartString += '. '
     }
   }
   console.log(cartString)
 }

function total() {
  var prices = []
  for(var i=0; i < cart.length; i++){
    var item = cart[i]
    var price = Object.values(item)
    var parsedPrice = parseInt(price)
    prices.push(parsedPrice)
  }
  var total = prices.reduce(funtion(sum, n){
    return sum + n
  },0)
  return total
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart = []
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
 if(!carNumber){
   console.log("We don't have a credit card on file for you to place your order.")
 } else {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
 }
 cart = []
 return cart
}
