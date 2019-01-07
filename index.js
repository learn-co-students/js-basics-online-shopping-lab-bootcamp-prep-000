var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObject = {[item] : Math.floor(Math.random()*100) }
  cart.push(itemObject)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if(cart.length == 0){
    console.log('Your shopping cart is empty.')
  }
  else{
     var resultString = 'In your cart, you have '
    for(let i =0; i<cart.length; i++){
      resultString += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`
      if(i<cart.length-1 && cart.length == 2){
        resultString += ' and '
      }else if (i<cart.length-1 && cart.length > 2){
        resultString += ', '
        if(i==cart.length-2){
          resultString += 'and '
        }
      }

    }
    resultString+= '.'
    console.log(resultString)
  }
}

function total() {
  var total = 0
  for(let i =0; i<cart.length; i++){
    total += parseFloat(cart[i][Object.keys(cart[i])])
  }
  return total
}

function removeFromCart(item) {
  for(let i = 0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber ==null){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}
