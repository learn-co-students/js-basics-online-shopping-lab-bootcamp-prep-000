var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random() * 100) +1
 cart.push({ itemName : item , itemPrice: price});
 
 return `${item} has been added to your cart.`
}


  function viewCart() {
  // write your code here
  var incartyouhave = "In your cart, you have "
  if (cart.length === 0){
    return "Your shopping cart is empty."
  
  } else if (cart.length === 1){
    return incartyouhave + `${cart[0].itemName} at $${cart[0].itemPrice}.` 
  }
    else
     for (var i=0; i < cart.length; i++){
          if (i === (cart.length)-1 ){
            incartyouhave = incartyouhave + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
          
          } else {
            incartyouhave = incartyouhave + `${cart[i].itemName} at $${cart[i].itemPrice}, `
            
                 }
      }return incartyouhave
}
      
function total() {
  // write your code 
 var cartLength = cart.length
 var totalValue = 0
  for(var i = 0; i<cartLength; i++){
    totalValue = totalValue + cart[i].itemPrice
  }
  return totalValue
}

function removeFromCart(item) {
  var cartlength = cart.length
  for (var i = 0; i<cart.length; i++){
   if (item === cart[i].itemName) {
     cart.splice(i, 1)
     return cart
     } 
      
  } 
return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}