var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var newItem = {item : Math.floor(Math.random() * 100)}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length > 0){
    console.log(`In your cart, you have `)
    for (var item in cart){
      console.log(`${item} at ${cart[item]},`)
    }
  }
  else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item){
  if (cart.hasOwnProperty(item)){
    delete cart.item;
  }
  else {
    return "That item is not in your cart."
  }
}

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
