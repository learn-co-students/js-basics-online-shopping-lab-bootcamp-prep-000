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
  return (t >= 0 ? parseInt(t) : NaN)
}
function getCart(){
  return cart
}
function addToCart(item){
  var price = Math.floor(Math.random() * 10)
  var itemObj={[item]: [price]};
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
 if(cart.length === 0){
    console.log("Your shopping cart is empty.")
   return undefined
 }
 var result = "In your cart, you have "
 for(var index = 0; index < cart.length; index++){
    if(index !== 0){
      result += ","
    }
    var item  = Object.keys(cart[index])[0]
    var price = Object.values(cart[index])[0]
    result += ` ${item} at $${price}`
  }
  result += "."
  console.log(result)
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  else{
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
     cart = []
     return true
   }
}
function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item)){
          delete cart[i]
          return cart
      } 
  }
  console.log("That item is not in your cart.");
}
