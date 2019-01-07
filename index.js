var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random()*100)+1
 cart.push({ [item] : price })
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if(!cart.length){
    return console.log('Your shopping cart is empty.')
  }
  const list = []
  for(var i = 0; i < cart.length; i++){
    let item = Object.keys(cart[i])[0]
    let price = cart[i][item]
    list.push(`${item} at $${price}`)
  }
  if(cart.length > 2){
    var output = `In your cart, you have `
    for(var i = 0; i < cart.length-1; i++){
      output += `${list[i]}, `
    }
    output += `and ${list[cart.length-1]}.`
    return console.log(output)
  }
  return console.log(`In your cart, you have ${list.join(' and ')}.`)
}

function total() {
  var t = 0
  for(var i=0; i < cart.length; i++){
    for (var item in cart[i]){
      t += cart[i][item]
    }
  }
  return t
}

function removeFromCart(item) {
  var found = 'False'
  for(var i=0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
    if (found == 'False'){
      console.log('That item is not in your cart.')
      return cart
    }
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return console.log("Sorry, we don't have a credit card on file for you.")
  }
  var t = total()
  cart = []
  console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
}
