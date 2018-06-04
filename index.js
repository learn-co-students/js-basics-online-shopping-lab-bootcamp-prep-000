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
 var obj = {}
 var price = Math.floor(Math.random() * 100)
 
 Object.assign(obj,{itemName: item, itemPrice: price})
 cart.push(obj)
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
    var items = []

    for(let i = 0; i < cart.length; i++){
        items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }

    if(!cart.length){
        return "Your shopping cart is empty."
    } else if(cart.length === 1) {
        return `In your cart, you have ${items}.`
    } else {
        var lastItem = items.pop()
        return `In your cart, you have ${items.join(", ")}, and ${lastItem}.`
    }
        
}

function total() {
  // write your code here
  var results = 0
  for(let i = 0; i < cart.length; i++){
    results += cart[i].itemPrice
  }
    return results
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
   if(cart[i].itemName === item){
      cart.splice(i,1)      
     return cart
   }
  }
  return "That item is not in your cart."

}

function placeOrder(cardNumber) {
  // write your code here
  var array = []
     if(cardNumber != null){
     var totalCost = total()
    // array = cart.splice(0,cart.length)
    cart = array
     return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
   } else {
  return "Sorry, we don't have a credit card on file for you."
  }
}
