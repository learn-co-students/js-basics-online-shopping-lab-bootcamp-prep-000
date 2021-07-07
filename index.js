var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var a = {}
  a.itemName = item 
  a.itemPrice = Math.floor(Math.random()*100 +1)
  cart.push(a)
  return (`${item} has been added to your cart.`)
}

function viewCart() {
 if (!cart.length){
   return "Your shopping cart is empty."
 } 
 var cartDescription = 'In your cart, you have '
  if (cart.length >= 1 ){
    cartDescription += `${cart[0].itemName} at $${cart[0].itemPrice}`
  }
  if (cart.length >= 2) {
     var middleCartItemsDescription = ''
     for(let i = 1; i<cart.length-1;i++) {
       middleCartItemsDescription  += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
  }
    cartDescription += `${middleCartItemsDescription}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
} 
   return `${cartDescription}.`
}

function total() {
  var value = 0 
  for (let i = 0; i< cart.length; i++){
    value += cart[i].itemPrice
  }
  return value
}




function removeFromCart(item) {
  for (let i = 0 ;i < cart.length; i++) {
    if (cart[i].itemName === item) {
      var itemstoremove = cart[i]
    }
  } 
  if(! itemstoremove){
    return "That item is not in your cart."
  } else {
  cart.splice(cart.indexOf(itemstoremove),1)
  return cart
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var money = total()
    setCart([])
    return `Your total cost is $${money}, which will be charged to the card ${cardNumber}.`
  }
}
