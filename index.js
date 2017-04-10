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

function removeFromCart(itemName){
  if(cart.hasOwnProperty([itemName]){
    index = cart.indexOf([itemName])
    cart.splice(index, 1)
    return cart
  }
    else{
      return "That item is not in your cart."
    }

}
//var cart = [{trees : 24}, {ice : 15}, {car : 7}]

//
// function removeFromCart(itemName){
//   for(i = 0; i < cart.length; i++){
// 	if(cart.hasOwnProperty === itemName){
//     	var index = cart.indexOf(itemName)
//     	cart.splice(index, 1)
//     return cart
//     }
//  	else{
//     return "That item is not in your cart."
//  	}
// 	}
// }
//
// removeFromCart("ice")

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
