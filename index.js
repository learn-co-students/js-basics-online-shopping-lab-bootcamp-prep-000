var cart;


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
//began here
var cart = []

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

var r = []
function viewCart(){
  if(cart.length>0){
    for (var i = 0; i < cart.length; i++) {
      var itemType = Object.keys(cart[i])
      r.push(` ${itemType[0]} at $${cart[i][itemType[0]]}`)
    }
    console.log(`In your cart, you have${r}.`)
  }
  else if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
}



function removeFromCart(item){
  var x = {}

  for(var l=0; l<cart.length; l++){
  x = Object.assign(x, cart[l])
  }

  if(x.hasOwnProperty(item)){
    for(var i=0; i<cart.length; i++){
      if(item === Object.keys(cart[i])[0]){
        cart.shift()
        return cart
      }
      else{

      }
    }
  }
  else{
      console.log("That item is not in your cart.")
    }
}

function placeOrder(credit){
  if((typeof credit)==="number"){
    for(var a = 0; a<cart.length; a++){
      var y = Object.keys(cart[a])
      var total = 0
      total = (cart[a][y[0]] + total)
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${credit}.`)
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = []
}
