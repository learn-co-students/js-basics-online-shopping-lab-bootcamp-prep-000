var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
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
function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random(item));
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (!cart.length) {
  return console.log("Your shopping cart is empty.")
}
  var itemsAndPrices = [];
   for (let i = 0; i < cart.length; i++) {
     let itemAndPrice = cart[i]
     let item = Object.keys(itemAndPrice)[0]
     let price = itemAndPrice[item]

     itemsAndPrices.push(`${item} at \$${price}`)
   }

   console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item){
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(number){
  if(!number){
    return console.log("We don\'t have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
   cart = [];
}
