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
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log ('Your shopping cart is empty.')
  }
  else{
   var itemsWithPrices = []
     for (let i = 0; i < cart.length; i++) {
       let itemAndPrice = cart[i]
       let item = Object.keys(itemAndPrice)
       let price = itemAndPrice[item]
       itemsWithPrices.push(`${item} at \$${price}`)
     }
     console.log(`In your cart, you have ${itemsWithPrices.join(', ')}.`)
 }
}

function removeFromCart(item){
    if (cart.hasOwnProperty(item) === false){
      console.log(`That item is not in your cart.`)
    }
      for (let i = 0, l = cart.length; i < l; i++){
        if (cart[i].hasOwnProperty(item)){
          cart = cart.slice(0, i).concat(cart.slice(i + 1))
        }
    }
    return cart
}

function placeOrder(number){
  if (!number){
    console.log(`We don't have a credit card on file for you to place your order.`)
  }

function total(){
  let cost = 0;
for (var i = 0, l = cart.length; i < l; i++) {
  for (var item in cart[i]) {
    cost += cart[i][item]
  }
}

return cost
}

console.log(`Your total cost is \$${total()}, which will be charged to the card ${number}.`)
cart = []
return cart

}
