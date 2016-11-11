var cart = []

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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({ [item]: price})
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  const l = cart.length
  if (!l) {
    return console.log('Your shopping cart is empty.')
  }
  let itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemPrice = cart[i]
    let item = Object.keys(itemPrice)[0]
    let price = cart[item]
    itemsAndPrices.push(`${item} at $${price}`)
  }
  return console.log(`In your cart you have ${itemsAndPrices}.join(', ')`)
}

function removeFromCart(item){
  // if item is not  a key in an object within the cart array, then print...
  for (var i = 0, l = cart.length; i<l; i++) {
      if (Object.keys(cart[i]) === [item]){
        delete cart[i]
      }
    }
  }

  //else {
    //if item is a key in an object within the cart array delete that object
    //delete cart[i]
  //}
//if (cart[i][item] === undefined) {
//console.log('That item is not in your cart.')
