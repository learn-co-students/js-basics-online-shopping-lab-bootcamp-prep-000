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
      inCart = true
      cart.splice(item, 1)
    }
  }
  if (!inCart) {
    //debugger
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(creditNumber){
  if (typeof creditNumber !== 'undefined') {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditNumber}.`)
    cart = [];
  } else {
      console.log("We don't have a credit card on file for you to place your order.")
  }
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
