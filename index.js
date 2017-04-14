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

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
	var obj = {}
	var price = Math.floor(Math.random()*100)
	obj[item] = price
	cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var sample = {}
    var text = []
    for(var i in cart){
      Object.assign(sample,cart[i])
    }
    for (var i in sample){
       text.push(`${i} at $${sample[i]}`)
    }
  console.log("In your cart, you have "+text.join(', ')+".")}
}

function removeFromCart(item){
  var check = []
  for(var i in cart){
    if(cart[i].hasOwnProperty(item)){
       cart.splice(i,1)}
       else{
         check.push(item)
       }}
  if(cart.length == check.length){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
