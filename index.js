var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var newCart = {}
  var price = Math.floor((Math.random() * 100) + 0);
  newCart[item] = price
  cart.push(newCart)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var anotherArr = [];
    for (var newArr in cart) {
      //debugger
      if (cart.hasOwnProperty(newArr)) {
        var item = Object.keys(cart[newArr])[0]
        var price = cart[newArr][item]
        anotherArr.push(`${item} at $${price}`)
      }
    }
    console.log(`In your cart, you have ${anotherArr.join(', ')}.`)
  }
}

// Deletes an entire object from the array.
function removeFromCart(itemName){
  var inCart = false
  for(var item in cart){
    if(cart[item].hasOwnProperty(itemName)) {
      //var item = Object.keys(cart[newArr])[0]
      // if (item === itemName) {
      //var index = cart[item].indexOf(itemName)
      cart.splice(item, 1)
      //delete cart[item]
      inCart = true
      //cart.splice(0, 1)
      // var index = item.indexOf(itemName) other ways to do it and passing.
      // }
    }
  }
  if (!inCart) {
    //debugger
    console.log('That item is not in your cart.')
  }
  debugger
  return cart
}

//delete the "key" in obj1 should look like delete array['obj1']['key']
// Another variation but still deletes an entire object from the array.
// function removeFromCart(item){
//   for(var items in cart){
//     if(cart[items].hasOwnProperty(item)){
//       cart.splice(items,1);
//       return cart;


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
