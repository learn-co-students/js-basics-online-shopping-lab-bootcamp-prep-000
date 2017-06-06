var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  console.log(`${item} has been added to your cart.`)
  cart.push({ [item] : price })
  return cart
}

function viewCart() {
  let resultString = 'In your cart, you have ';
  if(cart.length === 0){
    console.log('Your shopping cart is empty.')
  }else {
    for (var i = 0; i < cart.length; i++) {
      for(var prop in cart[i]){
        resultString += `${prop} at $${cart[i][prop]}, `
      }
    }
  }
  resultString = resultString.slice(0, resultString.length - 2)
  console.log(resultString + '.')
}

function removeFromCart(item) {
  var itemFound = false;
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)){
      itemFound = true
      cart.splice(i,1)
    }
  }

  if(!itemFound){
    console.log('That item is not in your cart.')
  }else{
    return cart
  }
}

function placeOrder(number) {
  if(number === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    // while(cart.length > 0){
    //   cart.pop()
    // }
    setCart([])
  }
}


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
