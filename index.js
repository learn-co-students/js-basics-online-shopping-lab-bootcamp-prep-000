var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var store = new Object();
function addToCart(item) {
  var min = Math.ceil(1);
  var max = Math.floor(100)
  var price = Math.floor(Math.random() * (max - min)) + min
  store = new Object()
  store[item] = price
  cart.push(store)
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart(){
	if(cart.length === 0){
		console.log('Your shopping cart is empty.');
	}else{
		var array = []
		for(var i = 0; i < cart.length; i++){
			var x = Object.keys(cart[i])[0]
			var y = cart[i][x]
			var z =(' '+x + ' at $' + y)
			array.push(z)
		}
		var con = ['In your cart, you have']

		for(var o = 0; o < array.length; o++){
			con += array[o]
			if(2 < array.length){
				con+= ','
			}
			if(o + 2 === array.length){
				con += ' and' + array[o + 1]
				break
			}
		}
		var o = 0
		con += '.'
		console.log(con)
	}
}
addToCart('Milk')
addToCart('Eggs')
addToCart('Socks')
addToCart('Boxes')
viewCart()
function total() {
  var itemPrices = []
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])[0]
    var itemPrice = parseInt(cart[i][itemName])
    totalPrice += itemPrice
  }
  return totalPrice
}
total()
function removeFromCart(item) {
  var items = []
  for(var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])[0]
    items.push(itemName)
  }
  var moarItems = []
  if(items.includes(item)){
    for(var o = 0; o < cart.length; o++){
      if(Object.keys(cart[o])[0] === item){
        delete cart[o]
        cart.splice(o,1)
      }
    }
  }else{
  console.log('That item is not in your cart.')
  }
}
function placeOrder(cardNumber) {
  if(cardNumber){
    console.log('Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber +'.')
    for(var i = 0; i < cart.length; i++){
      cart.splice(0,cart.length)
    }
  }else{
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
}
// console.log(cart)
// removeFromCart('Eggs')
// console.log(cart)
placeOrder(124345)
console.log(cart)
