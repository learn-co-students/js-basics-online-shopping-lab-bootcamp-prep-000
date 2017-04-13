var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){

  if(cart.length == 0){
    console.log("Your shopping cart is empty.")
    }
  else{
    var items = []
    for(var i = 0; cart.length > i; i++){ // [{pizza: 24}, {socks: 25}, {iPad: 75}]
      var key = Object.keys(cart[i])[0] // 'pizza'
      var price = cart[i][key] // 24
      items.push(`${key} at $${price}`)
      // ['socks at $98', 'puppy at $33', 'iPhone at $16']
      // socks at $98, puppy at $33, iPhone at $16
  	  //  var keyTwo = Object.keys(cart[1])
  	  //   var keyThree = Object.keys(cart[2])

    }
    console.log(`In your cart, you have ${items.join(', ')}.`)
	}

}


//var cart = [{trees : 24}, {ice : 15}, {car : 7}]


function removeFromCart(itemName){
  for(var i = 0; i < cart.length; i++){
	   if(cart[i].hasOwnProperty(itemName)){
    	cart.splice(i, 1)
      return cart
      }

	}
  console.log("That item is not in your cart.")
}
//
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function placeOrder(cardNumber){
  if(cardNumber === undefined){

    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
