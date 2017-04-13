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
  var itemPrice = Math.floor(Math.random() * 100)
  // {pizza: 24}

  cart.push({[item]: itemPrice}) // [key]: makes the key dynamic
  console.log(item + ' has been added to your cart.')
  return cart
}
function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var str = "In your cart, you have "
          for (var i = 0; i < cart.length; i++){
          var temp = Object.keys(cart[i])
	        str += temp + ' at $'
	        str += cart[i][temp] + ', '
        }
    var str2 = str.slice(0,-2) //removes the comma and adds a period
    str2 += '.'
    console.log(str2)
    }
  }

  function removeFromCart(item){
    for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
		cart.splice(i, 1);
		var bool = true
     }
  }
	if(!bool){console.log('That item is not in your cart.') }
}

function placeOrder(cardNum){
console.log(cardNum)
if (cardNum === undefined){
console.log("We don't have a credit card on file for you to place your order.")
}
else {
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`)
cart = []
}

}
