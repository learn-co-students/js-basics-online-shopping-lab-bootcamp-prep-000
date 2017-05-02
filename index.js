var cart = [];

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

function getCart() {
  return cart
}

function addToCart(item){
  var cartObj = {[item]:Math.floor(Math.random()*100)}
  console.log(item + ' has been added to your cart.')
  cart.push(cartObj)
  return cart
}

function viewCart(){
  var names = []
  if (cart.length > 0){
    for (var i=0; i<cart.length; i++) {
      var  itemNames = Object.keys(cart[i])
      names.push(itemNames + ' at $' + cart[i][itemNames])
    }
    console.log ('In your cart, you have ' + names.join(', ') + '.')
  }else{
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item){
  for(var i = 0; i<cart.length; i++){
    var  itemName = Object.keys(cart[i])[0]
    if (itemName === item){
      cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber){
  if(cardNumber === parseInt(cardNumber, 10)){
    console.log("Your total cost is $" + total() +", which will be charged to the card " + cardNumber + ".")
    cart.length = 0
    return cart
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
