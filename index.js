var cart=[];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart
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

function viewCart(){
  if(cart.length===0){
    return console.log("Your shopping cart is empty.")
  }else{
    var items="In your cart, you have "
    for(var num in getCart()){
      for(var i in getCart()[num]){
        items=items+i+" at $"+getCart()[num][i]
      }
      if(num < cart.length-1){
        items=items+", "
      }else{
        items=items+"."
      }
    }
    return console.log(`${items}`)
  }
}

function addToCart(item){
  var price = Math.floor(100*Math.random())
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return getCart()
}
function removeFromCart(item){
  for(var i in cart){
    if (cart[i].hasOwnProperty([item])){
        cart.splice(i,1)
        return getCart()
      }
    }
  return console.log("That item is not in your cart.")
}

function placeOrder(cc){
  if(cc!==undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
    cart.length=0
    return cart
  }
  cart.length=0
  console.log("We don't have a credit card on file for you to place your order.")
  return cart
}
