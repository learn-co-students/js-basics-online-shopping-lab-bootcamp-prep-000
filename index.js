var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 })
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) return 'Your shopping cart is empty.'
  var res = 'In your cart, you have '
  
  for(var i=0; i<cart.length; i++){
    res += `${cart[i].itemName} at $${cart[i].itemPrice}${i === (cart.length - 1) ? '.':', '}`
    
    if(i === cart.length - 2) res += 'and '
  }
  return res
}

function total() {
  var tot = 0;
  cart.forEach((item) => tot += item.itemPrice)
  return tot
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) return "Sorry, we don't have a credit card on file for you."
  
  var res = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return res
}




















