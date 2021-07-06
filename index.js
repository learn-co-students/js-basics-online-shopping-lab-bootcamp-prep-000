var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
  
  if (cart.push(newItem)){
  return `${item} has been added to your cart.`}
}

function viewCart() {
  var newArray = [];
if (cart.length === 0){
  return "Your shopping cart is empty."
} else if (cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
} else if (cart.length === 2){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
} else if (cart.length > 2){
  for (var i=0; i<cart.length; i++){
    newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  newArray[newArray.length - 1] = `and ${newArray[newArray.length - 1]}.`
  return `In your cart, you have ${newArray.join(", ")}`
}
  
}



function total() {
  var totalArray = []
 for (let i = 0; i<cart.length; i++){
   totalArray.push(cart[i].itemPrice)
 }
 const totalCart = totalArray.reduce((a, b) => {
  return a + b
 })
 return totalCart
}



function removeFromCart(item) {
  var cartContent = []; 
  for (let i = 0; i < cart.length; i++){
    cartContent.push(cart[i].itemName)
  }
  if (cartContent.includes(item) === false){
    return "That item is not in your cart."
  } else if (cartContent.includes(item) === true){
    cart.splice(cart.indexOf(item)-1, 1)
    return cart
  }
  
}








function placeOrder(cardNumber) {
  var totalArray = []
  if (cardNumber === undefined){
    
    return "Sorry, we don't have a credit card on file for you."
  } else if (cardNumber !== undefined){

 for (let i = 0; i<cart.length; i++){
   totalArray.push(cart[i].itemPrice)
 }
 const totalCart = totalArray.reduce((a, b) => {
  return a + b})

    cart.length = 0
  
      return `Your total cost is $${totalCart}, which will be charged to the card ${cardNumber}.`
  }
}











