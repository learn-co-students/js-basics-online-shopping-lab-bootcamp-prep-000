var cart=[];

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

var getCart=()=>cart
function addToCart(item){
  var n=new Object({})
  n[item]=Math.floor((Math.random()*100))
  cart.push(n)
  console.log(item+' has been added to your cart.')
  return cart
}

function viewCart(item){
  if(cart.length==0){
    console.log('Your shopping cart is empty.')
    return cart}
  var str='In your cart, you have '
  for(var i=0;i<cart.length;i++){
    if(i>0)str+=', '
    var name=Object.keys(cart[i])[0]
    str+=name+' at $'+cart[i][name]
  }
  console.log(str+'.')
  return cart
}

function removeFromCart(item){
  var count=0
  for(var i in cart){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      count++
    }
  }
  if(count==0)console.log('That item is not in your cart.')
  return cart
}

function placeOrder(){
  if(arguments.length==0)
  console.log('We don\'t have a credit card on file for you to place your order.')
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${arguments[0]}.`)
  cart=[]}
  return cart
}
