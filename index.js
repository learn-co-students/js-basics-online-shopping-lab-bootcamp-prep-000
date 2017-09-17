var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() *100)+1
  var item = {[itemName]: itemPrice}
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var name = Object.keys(cart)
    for (let i=0; i < name.length; i++) {
      var item = name[i]
      var price = cart.item
      console.log(`In your cart, you have ${item} at $${price}.`)
    }

    // var price =
    // console.log(`In your cart, you have ${name} at $${price}.`)
  }
  // else {
  //   var inCart= "In your cart you have "
  //   for (let i=0; i < cart.length; i++) {
  //     inCart = inCart + `${name} at $${price}`
  //   }
  //   inCart= inCart + `and ${name} at $${price}.`
  //   return inCart
  //   }
}

// function total() {
//   // write your code here
// }
//
// function removeFromCart(item) {
//   // write your code here
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
// }
