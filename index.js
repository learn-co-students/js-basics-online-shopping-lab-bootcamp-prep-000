var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newPrice = Math.floor((Math.random() * 100) + 1);
  var newItem = new Object({itemName: item, 
                          itemPrice: Math.floor((Math.random() * 100) + 1)})

  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  }
  
  if (cart.length === 1){
    for (let i = 0; i < cart.length; i++){
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }
  
  else {
    var returnStatement = `In your cart, you have `
    
    for (let i = 0; i < cart.length; i++){
      if (i === cart.length-1){
        returnStatement += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        
      } 
      
      else {
        returnStatement += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
    return returnStatement;
  }
  
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++){
    total+= cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
    // counter for when looping
    var counter = 0;
    // variable to hold the current item if it matches 'item'
    var current = -1;
    
    // for loop to loop through cart
    for (let i = 0; i < cart.length; i++){
      // if any value matches 'item'...
      if (cart[i].itemName === item){
        // counter is set to '1', whilst current is set to the value of i
        counter = 1;
        current = i;
      }
    }
    
    if (counter > 0 && current != -1) {
      cart.splice(current, 1)
      return cart
    }
    
    else {
      return `That item is not in your cart.`
    }
}
function placeOrder(cardNumber) {
  var tot = total()
  cart.length = 0;
  if (cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  
  else {
    
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`


  }
}
