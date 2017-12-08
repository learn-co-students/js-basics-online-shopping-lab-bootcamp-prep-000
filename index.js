var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100)
var newObject = {}
newObject[item] = price
cart.push(newObject)
console.log(`${item} has been added to your cart.`)
return cart
}
addToCart(eggs)


function viewCart() {
var newObject = []
var price1 = Math.floor(Math.random() * 100)
var price2 = Math.floor(Math.random() * 100)
var price3 = Math.floor(Math.random() * 100)

  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
    for (i=1; i<cart.length; i++) {
if (cart.length = 1) {
console.log (`In your cart, you have bananas at \$ ${price1}.`)
else if (cart.lenght = 2) {
  console.log (`In your cart, you have bananas at \$ ${price1} and pancake batter at \$ ${price2}.`)
}
else (if cart.length = 3) {
  console.log (`In you cart, you have bananas at \$ ${price1}, and pancake batter at \$ ${price2}, and eggs at \$ ${price3}.`)
}
}
    }
  }
}
viewCart()

viewCart()

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
