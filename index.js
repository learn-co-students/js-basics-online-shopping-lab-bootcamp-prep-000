var cart = [];
/////////////
function setCart(newCart) {
  cart = newCart;
}
/////////////
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
////////////
function getCart(){
  return cart
}
/////////// Returns the added key-pair, error has to do with something else?
function addToCart(item){
  console.log(`${item} has been added to your cart.`)
  var price = Math.random() * 100
  price=Math.floor(price)
  cart.push({[item]: price})
  return cart
}
///////////viewCart works with zero length, but not with non zero
////////// length arrays
function viewCart(){
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else{
      var items = Object.keys(cart)
      var annoucement = "In your cart, you have "
      //for(var items in cart) {
      for(var i = 0; i < (cart.length-1); i++){
        annoucement += `${items} at ${cart[items[i]]}`
        if (i===cart.length){
          annoucement +="."
        }else {
          annoucement+=", "
        }
    }
    return annoucement
  }
}
//////////////
/*
for(var items in cart){
  console.log(`In your cart, you have ${items} at ${cart[items[i]]}!`)
}
*/
////////////// haven't checked the below in console yet
function removeFromCart(item){
  if(cart.hasOwnProperty(item) === false){
    return "That item is not in your cart."
  }else{
     delete cart[item]
     return cart
  }
}
/////////////
function placeOrder(cardNumber){
  if (cardNumber === null){
    return "We don't have a credit card on file for you to place your order."
  }else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
