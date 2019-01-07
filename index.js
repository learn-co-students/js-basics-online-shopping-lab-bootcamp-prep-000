var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart_object = {}
  cart_object[item] = Math.floor(Math.random() * 100)
  cart.push(cart_object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

// adding items to cart

addToCart('apples')
addToCart('oranges')
addToCart('bananas')

//console.log(addToCart('apples')) // tests addToCart function

function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else {
    var output = 'In your cart, you have '
    for(var iter = 0; iter < cart.length; iter++){ // iterator to go thru the array
      var item_object = cart[iter]
      var item = Object.keys(item_object)
      var value = item_object[item]
      if(cart.length === 1){
        output = output + `${item} at $${value}.`
      } else if(cart.length === 2){
        if(iter === cart.length - 1){
          output = output + `and ${item} at $${value}.`
        } else {
          output = output + `${item} at $${value} `
        }
      } else if(iter === cart.length - 1){
        output = output + `and ${item} at $${value}.`
      } else {
        output = output + `${item} at $${value}, `
      }
    }
  }
  console.log(output)
}

//console.log(viewCart())

function total() {
  var totalvalue = 0
  for(var iter = 0; iter < cart.length; iter++){
    var item_object = cart[iter]
    var item = Object.keys(item_object)
    var price = item_object[item]
    totalvalue += parseInt(price)
  }
  return totalvalue
}

//console.log(total())

function removeFromCart(item) {
  var tracker = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item){
      cart.splice(i, 1)
    }
  }
  if(tracker === cart.length){
    console.log('That item is not in your cart.')
  }
  return cart
}

//removeFromCart("apples")
//console.log(cart)

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}

console.log(placeOrder(123))
