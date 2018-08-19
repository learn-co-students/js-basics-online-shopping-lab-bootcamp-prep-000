var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.random()*100
 price = Math.floor(price)
cart.push({itemName: item, itemPrice: price})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  if(cart.length == 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if(cart.length == 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else{
    return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  let priceTotal = 0
  for(let i=0; i < cart.length; i++){
    priceTotal = priceTotal + cart[i].itemPrice
  }
  return priceTotal
}

function removeFromCart(item) {
if(!cart[item]){
  return 'That item is not in your cart.'
}
else{
for(let i = 0 ;i < cart.length; i++){
 if(cart.includes(item)){
  cart = cart.splice(i, 2)
  return cart
}
}
}
}
function placeOrder(cardNumber) {
  if(cardNumber){
    let tempCard = cardNumber
    let tempTotal = total()
    setCart([])
    return `Your total cost is $${tempTotal}, which will be charged to the card ${tempCard}.`
  }
  else{
    return "Sorry, we don't have a credit card on file for you."
  }

}
