var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var newItem = {itemName:[item], itemPrice: Math.floor(Math.random(1,101)*100)}
   cart.push(newItem);
  return (`${item} has been added to your cart.`);
 
  
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }

  var itemsWithPrices = ""

  for (let i = 0; i < cart.length; i++) {
    if (cart.length === 1){
      
    }return `In your cart, you have ${cart[i].itemName} at ${cart[i].itemPrice}`
      if (cart.length === 2 ) {
        return `In your cart, you have ${itemsWithPrices}`.join(', and')
      }
  
    
}


function total() {
  var  total = 0 ;
 
  for (var i = 0; i < cart.length; i++) {
   total += cart[i].itemPrice
  } return total
}


function removeFromCart(item) {

 for (let i = 0; i < cart.length; i++){
    
    if(cart[i].itemName === item) {
      return cart.splice(i,1)
    
  } else {
      return 'That item is not in your cart.'
    }
  }
}

function placeOrder(creditcardnumber) {
  if (creditcardnumber) {
    cart = []
    return `Your total cost is $${total()}, which will be charged to the card ${creditcardnumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
  
  
  
}



