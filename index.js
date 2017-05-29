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
function addToCart(newItem){
  var price = Math.floor(Math.random() * 100)
  var item = {}
  item[newItem] = price
  cart.push(item)
  console.log(`${newItem} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var inCart = []
    for (var i = 0; i < cart.length; i++){
    	var item = Object.keys(cart[i])[0]
    	var price = cart[i][item]
    	inCart.push(`${item} at $${price}`)
    }
    console.log(`In your cart, you have ${inCart.join(", ")}.`)
  }
}
function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){  // Function goes through every object in the array
    if(cart[i].hasOwnProperty(item)){ // if object is in the array
      cart.splice(i,1) // remove object from array
    }
  }
  console.log("That item is not in your cart.") // after going through the array and haven't found the item we say we haven't found it
  return cart
}
function placeOrder(cardNumber){
  if (cardNumber === undefined){
    console.log('We don\'t have a credit card on file for you to place your order.')
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
  }
}
// function total() {
//   // they set t to 0 to keep track of the total
//   let t = 0
//
// 	// here they iterate over the cart to be able to access the objects
//   for (var i = 0, l = cart.length; i < l; i++) {
//
//     // here they iterate over each key the object (cart[i]) has and item represents that key
//     for (var item in cart[i]) {
//
//       // here they update t with the value of cart[i][item] // object[key] format
//       t += cart[i][item]
//     }
//   }
//
//   return t // once the loops run and total is calculated t gets returned
// }
