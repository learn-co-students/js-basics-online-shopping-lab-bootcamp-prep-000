var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var items = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100 + 1),
 }
 cart.push(items)
 return item + " has been added to your cart."
}

function viewCart() {
    
  var cartString ='In your cart, you have ' 
  var container = []

  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
   
    for (var i=0; i < cart.length; i++) {
      cart[i].itemName
      cart[i].itemPrice

      container.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
        
      if (cart.length === 2) {
        return cartString + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`  + '.'
      }
      
      if (cart.length === 3) {
        return cartString + `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}`  + '.'
  
    }
   return cartString + container + '.'
  
  }
}

function total() {
 var price = 0
  for (var i=0; i < cart.length; i++) {
    price = price + cart[i].itemPrice
  }
  return price
}


function removeFromCart(item) {

 for(var i =0; i<cart.length; i++){
    if (cart[i].itemName===item){
        cart.splice(i, 1)
        return cart
 }
   }

  return `That item is not in your cart.`
  
}


function placeOrder(cardNumber) {

  if (!cardNumber){
  return `Sorry, we don't have a credit card on file for you.`
 }
  else{
    var sum = total()
    cart =[]
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
    
         
      
   
  }
  
}



