var cart=[];

function getCart(){
  return cart;
}

function addToCart(newItem){
  var price = Math.floor(Math.random()*10)
  var obj = {[newItem]: price}
  cart.push(obj)
  console.log(`${newItem} has been added to your cart.`)
  return cart
}

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


function viewCart(){
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`)
  }
  else {
    var str=`In your cart, you have`
    for (var i=0; i<cart.length; i++) {
        var it = Object.keys(cart[i])
         str += ` ${it} at $${cart[i][it]},`
     }
     str = str.slice(0, -1);
     str += `.`
     console.log(str)
  }
 return
}


function removeFromCart(itemName){
  for (var i=0; i<cart.length; i++) {
      if (`${Object.keys(cart[i])}` === itemName) {
          cart.splice(i,1);
          return cart
      }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(number){

  if(number === undefined){
    console.log(`We don't have a credit card on file for you to place your order.`)
  }

  else {
    var tot = total()
    console.log(`Your total cost is $${tot}, which will be charged to the card ${number}.`)
  }
  cart = []
  return cart
}
