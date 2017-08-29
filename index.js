var cart = [];

function getCart(){
  return cart
}

function setCart(newCart) {
  cart = newCart;
  return cart
}

function addToCart(item){
  var itemPrice = Math.floor(Math.random()*100) + 1;
  var addItem = {[item]:itemPrice}
  cart.push(addItem);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
     console.log("Your shopping cart is empty.")
  }

  var returnStr = "In your cart, you have "
  if (cart.length === 1){
     console.log(returnStr + `${Object.keys(cart[0])} at ${cart[0][Object.keys(cart[0])]}.`)
  }

  if (cart.length === 2){
    returnStr += `${Object.keys(cart[0])} at ${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at ${cart[1][Object.keys(cart[1])]}.`
     console.log(returnStr)
  }

  var newArray = []
  if (cart.length > 2){
    for(var i = 0; i < cart.length-1;i++){
      newArray.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `)
    }
    for (var i = 0; i< newArray.length;i++){
      returnStr += newArray[i]
    }
    // debugger
    returnStr += `${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`

     console.log(returnStr)
  }

}

function total(){
  var total = 0
  for (var i = 0; i<cart.length; i++){
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item){
    for(var i = 0; i<cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
        delete cart[i][item]
        cart = cart.filter(value => Object.keys(value).length !== 0);
        return cart
      }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cc="Sorry, we don't have a credit card on file for you."){
  var t = total();
  if (cc != "Sorry, we don't have a credit card on file for you."){
    console.log(`Your total cost is $${t}, which will be charged to the card ${cc}.`);
    cart = [];
  } else{
      console.log("We don't have a credit card on file for you to place your order.");
    }
  }
