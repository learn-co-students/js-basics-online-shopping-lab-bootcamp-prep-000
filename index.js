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
  var clone = Object.keys(cart)
  var array[]
  if (clone.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var line = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      array.push(${cart[i]} at ${cart[clone[i]]})
    }
    console.log(line + array.join(, ))
  }
  }


function total() {
  var clone = Object.keys(cart)
  var totalCost = 0
  for ( var i=0; i < clone.length; i++){
    totalCost += parseInt(cart[clone[i]])
    }
    return totalCost
}

function removeFromCart(item) {
  var clone = Object.keys(cart)
  for(var i = 0; i < clone.length; i++){
      if(clone[i] === item){

        cart.splice(i,1)
        return cart
      }
      else {
        console.log("That item is not in your cart.")
        return cart
    //  }
    }
  }
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
