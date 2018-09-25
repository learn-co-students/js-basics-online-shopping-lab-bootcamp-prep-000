var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = String(item)
 var itemPrice = Math.floor((Math.random() * 100) + 1)
  item = Object.assign({itemName: itemName}, {itemPrice: itemPrice})
 cart.push(item)
 return `${item.itemName} has been added to your cart.` 
}

function viewCart() {
  var cartData = []

  for(var i = 0; i < cart.length; i++){
    cartData.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
   }
  
  function multiRet(){
    for(var i = 0; i < cart.length; i++)
     if(i === cart.length - 1){
      cartData[i] = ` and ${cart[i].itemName} at $${cart[i].itemPrice}`
    }                // Adds and to the last index 
     else if(i > 1 && i != cart.length - 1) {
      cartData[i] = ` ${cart[i].ItemName} at $${cart[i].itemPrice}`  
      i++
    }                // Adds a space to the beginning of each index after the first  
   } 
  
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cartData.length === 1) {
  return  `In your cart, you have${cartData}.` 
  } else if (cartData.length > 1) {
    multiRet()
    return `In your cart, you have${cartData}.`
  }
 }


function total() {
  var priceList = []
 for(var i = 0; i < cart.length; i++){
    priceList.push(cart[i].itemPrice)
 }
 const reducer = (a, b) => a + b
  return priceList.reduce(reducer) 
}

function removeFromCart(item) {
  let cart = getCart()
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1)
      return cart
   } 
  }
    return `That item is not in your cart.`
  }
 

function placeOrder(cardNumber) {
 var orderStatus = []
 if(cardNumber){
   orderStatus.push(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`) 
 } else {
   orderStatus.push("Sorry, we don't have a credit card on file for you.")
 }
 cart = []
 return orderStatus
}
