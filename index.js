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
        anotherArr.push(`${cart[newArr]} at $${newArr}`)
    }
    console.log(`In your cart, you have ${anotherArr.join(', ')}.`)
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
