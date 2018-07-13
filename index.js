var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var price = Math.floor(Math.random()*100)
  
var itemAndPrice = {
  itemName: item,
  itemPrice: price
};
  
cart.push(itemAndPrice)

return `${item} has been added to your cart.`
}

function viewCart() {

  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } 
  else if (cart.length === 1){
    return `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    
  } 
  else if (cart.length === 2){
    return `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
    
  } 
  else {
    var cartData = []
    for (var i = 0; i < cart.length-1; i++){
      cartData.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
}
    return `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`
  }
  
}

function total() 
{
    
  var cartItemPrice = [];
  var totalPrice = 0
  
  for(var i = 0; i < getCart().length; i++) {
    var itemPrice = cart[i][Object.keys(cart[i])]
      cartItemPrice.push(itemPrice)
    }
  
  for (var j = 0; j < cartItemPrice.length; j++) {
     cartItemPrice[j]+=totalPrice
  }
  return totalPrice
}



function removeFromCart(item) {
  
 
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      
       cart.splice(i, 1)
       return cart
       
     
    }
  }
  
   
  return `That item is not in your cart.`
   
}


function placeOrder(cardNumber) {

  if (cardNumber)
  {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for (var i = cart.length; i>= 0; i--) 
    {
      cart.pop();
      
        return cart
     }
  }
  return `Sorry, we don't have a credit card on file for you.`

}



