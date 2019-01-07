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
  return cart
}

function addToCart(item){
  const price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
const l = cart.length
if(!l){
  return console.log(`Your shopping cart is empty.`)
}
const ItemsandPrices = []

for (let i = 0; i < l ; i++){
let ItemandPrice = cart[i]
let item = Object.keys(ItemandPrice)[0]
let price =  ItemandPrice[item]

ItemsandPrices.push(`${item} at \$${price}`)
}

console.log(`In your cart, you have ${ItemsandPrices.join(', ')}.`)
}


function removeFromCart(item){

let itemInCart = false
for (let i = 0, l = cart.length; i < l; i++){
  if (cart[i].hasOwnProperty(item)){
    itemInCart = true
    cart = cart.slice(0 , i).concat(cart.slice(i + 1))
  }

}
  if (!itemInCart){
   console.log('That item is not in your cart.')
 }
return cart
}

function placeOrder(card){
  if (!card){
    console.log("We don't have a credit card on file for you to place your order.")
  }
let t = total()
console.log(`Your total cost is \$${t}, which will be charged to the card ${card}.`)
cart = [];
}
