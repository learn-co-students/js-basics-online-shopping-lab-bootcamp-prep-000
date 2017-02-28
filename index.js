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

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(100*Math.random())
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var array = [];
  if(cart.length){
    for (var i = 0; i < cart.length; i++) {
      var arrayItem = Object.keys(cart[i])[0]
      var arrayPrice = cart[i][arrayItem]
      array[i] = `${arrayItem} at $${arrayPrice}`
    }
      console.log(`In your cart, you have ${array.join(', ')}.`)
}
  else{
    console.log("Your shopping cart is empty.")
}
}

function removeFromCart(item){
  if(cart.length){
    for (var i = 0; i < cart.length; i++) {
      var stupidarray = cart[i];
      if(stupidarray.hasOwnProperty(item)){
        cart.splice(i,1);
      }
    }
}
  else{
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(card){
  if (card){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    for (var member in cart)
    cart = [];
}
  else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
