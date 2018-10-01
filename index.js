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
 let newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 }
 cart.push(newItem)
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length===0){
    return 'Your shopping cart is empty.'
  }
  let shoppingCart = "In your cart, you have"
  for(let i = 0; i < cart.length; i++){
    if(cart.length === 1){//if 1 item
      return shoppingCart + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if(i===cart.length-1){//if last item
      shoppingCart = shoppingCart + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
          return shoppingCart      
    }else{//if first or middle item in cart with 2+ items
      shoppingCart = shoppingCart + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
  }
}

function total() {
  // write your code here
  let sum = 0
  for(let i = 0; i<cart.length;i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName===item){
      cart.splice(i, 1)
      return cart
    }
  }return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  let num = cardNumber
  if(num === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
   let receipt = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
   cart = []
   return receipt
  }
}