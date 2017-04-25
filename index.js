var cart = new Object();
function getCart(){
  return cart
}
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0


    for (var item in cart) {
      t += cart[item]
    }


  return t
}

function addToCart (item){

  cart[item] = Math.floor(Math.random() *100)
  console.log(`${item} has been added to your cart.`)
  return cart
}
function viewCart(){
  var string = ""
  if(Object.keys(cart).length == 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    for (var item in cart){
    string += ` ${item} for $${cart[item]},`
  }
  console.log(`In your cart you have ${string}`)
}
}
function removeFromCart(name){
  for( var i in cart ){
  if(cart.hasOwnProperty(name)){
    delete cart.name
    return cart
  }
  else console.log("That item is not in your cart.")
}
}
