var cart = [];

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var itm = new Object({itemName: item, itemPrice: getRandomInt()})
  cart.push(itm)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var temp = `In your cart, you have `

  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  if (cart.length == 1){
    temp = temp + `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return temp
  }
  if (cart.length === 2){
         temp += `${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
         return temp
       }
  if (cart.length > 2){
    temp += `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}`
    for (var i = 0; i <= cart.length -1; i++){
      if(i >= 2 &&  i != cart.length -1){
        temp += `, ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
       if (i === cart.length - 1){
         temp += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
         return temp
       }
    }
  }
}


function total() {
  // write your code here
  var temp = 0
  for(var i = 0; i< cart.length; i++){
    temp = temp + cart[i].itemPrice
  }return temp
}

function removeFromCart(item) {
  // write your code here
  var temp = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      temp = true
      cart.splice(i,1)
      return cart
    }}
    if (!temp){
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  var temp = total().
  if (isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you."
  }
  if (!isNaN(cardNumber)){
     cart = []
     return `Your total cost is ${temp}, which will be charged to the card ${cardNumber}`
  }
}
