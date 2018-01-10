var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function price() {
  Math.ceil(1);
  Math.floor(100);
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  }
 cart.push({ [item]: price() })
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var cartList = []
  for (let i = 0; i<cart.length; i++){
    let groceryAndPrices = cart[i]
    let grocery = Object.keys(groceryAndPrices)
    let price = groceryAndPrices[grocery]
    cartList.push(`${grocery} at $${price}`)
  }
  if (cart.length === 1) {
  console.log(`In your cart, you have ${cartList}.`)
  }
  if (cart.length === 2) {
    console.log(`In your cart, you have ${cartList[0]} and ${cartList[1]}.`)
  }
  var cartMinus = cartList.slice(0, -1).join(', ')
  var n = cart.length-1
  if (cart.length > 2) {
    console.log(`In your cart, you have ${cartMinus}, and ${cartList[n]}.`)
  }
}

function total() {
  var cartPrices = []
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (let i = 0; i<cart.length; i++){
    let cartEverything = cart[i]
    let cartItems = Object.keys(cartEverything)
    let cartPrice = cartEverything[cartItems]
    cartPrices.push(cartPrice)
  }
  var sum = cartPrices.reduce((a, b) => a + b, 0);
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
