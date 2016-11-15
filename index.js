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
    console.log('Your shopping cart is empty.')
    return cart
  }
  let itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemPrice = cart[i]
    let item = Object.keys(itemPrice)[0]
    let price = cart[i][item]
    itemsAndPrices.push(`${item} at $${price}`)
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item){
  let itemInCart = false;
  for (let i = 0; i< cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart.shift(0,i)
    }
  }
  if(!itemInCart){
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber){
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  setCart([]);
  return cart
}
