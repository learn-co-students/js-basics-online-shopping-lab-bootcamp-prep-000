var cart = new Array();

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
  cart.push(Object({[item]:Math.floor(Math.random()*100)}))
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  } else {
    var list = ""
    for(var i=0;i<cart.length;i++){
      var pair = getCart()[i]
      for(var item in pair){
        list += `${i===0?'':','} ${item} at $${pair[item]}`
      }
    }
    console.log(`In your cart, you have${list}.`)
  }
}

function removeFromCart(item){
  for(var i=0;i<cart.length;i++){
    var entry = getCart()[i]
    if(entry.hasOwnProperty(item)){
      cart = [...cart.slice(0,i),...cart.slice(i+1)]
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
