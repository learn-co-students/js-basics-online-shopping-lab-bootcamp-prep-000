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
// if (cart.length > 2) 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
