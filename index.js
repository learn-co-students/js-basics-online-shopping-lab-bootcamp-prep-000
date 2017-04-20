var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function viewCart(){
  var allItems = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++){
      for (var item in cart[i])
      allItems.push(`${item} at $${cart[i][item]}`)
    }
  }
    console.log(`In your cart, you have ${allItems.join(", ")}.`)
  }

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  var product = {[item] : price}
  cart.push(product)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function removeFromCart(item){
  var isInCart = false;
  var n = cart.length;
  while (isInCart === false && n > 0) {
    isInCart = cart[n - 1].hasOwnProperty(item);
    n--;
  }
  if (isInCart === false){
    console.log("That item is not in your cart.")
  } else {
    cart.splice(n, 1);
  }
  return cart;
}

function placeOrder(cardNumber){
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
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
