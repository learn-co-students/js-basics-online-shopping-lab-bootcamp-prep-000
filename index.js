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
 let obj = {}
 obj.itemName = item
 obj.itemPrice = Math.floor(Math.random()* 100)
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let shopee = ['In your cart, you have']
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else{
    for (let i = 0; i < cart.length; i ++){
      if (i === cart.length-1){
        shopee.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      }else{
        shopee.push(`${cart[i].itemName} at $${cart[i].itemPrice},`)
      }
    }return shopee.join(' ')
  }
}

function total() {
  //write your code here
  let totalCost = 0
  for(let i = 0; i < cart.length; i++){
    let currentObj = cart[i];
    totalCost += currentObj.itemPrice;
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i <cart.length; i ++){
    if (cart[i].itemName === item){
      cart.splice(i,1)
    }
  }  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  let charge = total()
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
  cart.splice(0,cart.length)
}return `Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`
}
