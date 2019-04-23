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
 var price = Math.random() * (100 - 1) + 1
 getCart().push({ itemName: item, itemPrice: price })
 return getCart()[cart.length].itemName
 
}

function viewCart() {
  // write your code 
  let res = ''
  if (cart.length === 0){
    res = 'Your shopping cart is empty.'
    return res
  }else{
    res = 'In your cart, you have '
    for (let i = 0; i < cart.length; i++){
      if(i===cart.length-1){
        res += (`${cart.itemName} at $${cart[i].itemPrice}.`)
      }else{
        res += (`${cart[i].itemName} at $${cart[i].itemPrice}, `)
      }
    }
  }
  return res
}

function total() {
  // write your code here
  let sum = 0
  for (let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    if(i===cart.length-1 && item != cart[i].itemName ){
      return 'That item is not in your cart.'
    }else{
      if(cart[i].itemName === name){
        cart.splice(i,1)
      }
    }
  }
  return cart
  
}

function placeOrder(cardNumber) {
  // write your code
  if(cardNumber === '' || cardNumber === ' '){
    return `Sorry, we don't have a credit card on file for you.`
  }else{
    return  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  
}
