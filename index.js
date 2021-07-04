var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//this passes
function addToCart(item) {

  var price = Math.floor((Math.random() * 100 ) + 1)
  var toAdd = { [item]:price }
  console.log(item + " has been added to your cart.")
  cart.push(toAdd)
  return cart
}

function viewCart() {
  var array = []
  var line = "In your cart, you have "
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }

   else if(cart.length <= 2){
    for ( var i=0; i < cart.length; i++){
      var arrayKey = Object.keys(cart[i])[0]
        array.push(arrayKey + " at $" + ((cart[i])[arrayKey]))
        console.log(line + array.join(' and ') + ".")
      }
    }

    else{
      for ( var i=0; i < cart.length-1; i++){
        var arrayKey = Object.keys(cart[i])[0]
        array.push(arrayKey + " at $" + ((cart[i])[arrayKey]))
      }
        var lastIndex = cart.length-1
        var lastKey = Object.keys(cart[lastIndex])[0]
        var lastString = ", and " + lastKey + " at $" + ((cart[lastIndex])[lastKey])
        console.log(line + array.join(', ') + lastString + ".")
      }

}


//passes
function total() {
  var totalCost = 0
  for ( var i=0; i < cart.length; i++){
    var arrayKey = Object.keys(cart[i])[0]
    totalCost += parseInt((cart[i])[arrayKey])
    }
    return totalCost
}

//passes
function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
     var arrayKey = Object.keys(cart[i])[0]
      if(arrayKey === item){
        cart.splice(i,1)
        return cart
      }
    }
        console.log('That item is not in your cart.')
        return cart
    }



//passes
function placeOrder(cardNumber) {
  var cartTotal = total()

  if (cardNumber){
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
)
    cart = []
    return cart
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
