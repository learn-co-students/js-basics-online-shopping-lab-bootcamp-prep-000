var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 
 var addend = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1}
 cart.push(addend)
 
 return `${addend.itemName} has been added to your cart.`
 
}

function viewCart() {
  
  var status = "Your shopping cart is empty."
 
  if (cart.length > 0){
    status = "In your cart, you have "
    for (var i = 0; i < cart.length; i++){
      status = status + `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (i < cart.length - 1){
        status = status + ", "
        if (i === cart.length - 2){
          status = status + "and "  
        } 
      }else status = status + "."
      
    }    
  }
  return status 
}
  

function total() {
  var sum = 0 
  
  var i = 0
  while (i < cart.length){
    sum += cart[i].itemPrice
    i++
  }
  
  return sum
}

function removeFromCart(item) {
  
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      return cart.splice(i, 1)
    }
  }
  
  return "That item is not in your cart."
  
}

function placeOrder(cardNumber) {
  //use undefined, not null. Null means it is defined to be nothing. Undefined means you never assigned it to anything
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    //you originally had this called total, which was confusing it, thinking you were calling the function.
    var owed = total()
    
    cart = []
    
    return `Your total cost is $${owed}, which will be charged to the card ${cardNumber}.`
    
  }
}
