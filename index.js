var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor((Math.random() *100) + 1)

 var itemConstructor = {itemName: itemName, itemPrice: price}
 
 cart.push(itemConstructor)
 
 return `${itemName} has been added to your cart.`
 
}

function viewCart() {
  var cartString = ""
  var i = cart.length
  if (i===0){
    return "Your shopping cart is empty."
  } else if (i===1){
    cartString = `${cart[i-1].itemName} at $${cart[i-1].itemPrice}`
  } else {
  var n = 0;
  while (i>1){
    cartString = `${cartString}${cart[n].itemName} at $${cart[n].itemPrice}, `
    n++
    i--;
   } 
   cartString = `${cartString}and ${cart[n].itemName} at $${cart[n].itemPrice}`
  }
  
  return `In your cart, you have ${cartString}.`
}

function total() {
  var i = cart.length
  var total = 0
  while(i>0){
    total = total + cart[i-1].itemPrice 
    i--;
  }
  return total
}

function removeFromCart(item) {
  var i= cart.length
  var test = 0
  while (i>0){
    if(cart[i-1].itemName === item){
      cart.splice(i-1,1)
      i=0 
      test = 1
    } else {
      i--
    }
  } if(test===0){
    return "That item is not in your cart."
  } else {
    return cart 
  }
  
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cost = total()
    cart.length = 0
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
