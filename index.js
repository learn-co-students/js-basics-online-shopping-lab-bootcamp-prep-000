var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = {
   itemName:item, 
    itemPrice: Math.floor(Math.random() * 100) + 1,
  }
       

  cart.push (item)

  return `${item.itemName} has been added to your cart.`

}

function viewCart() {
  
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else {
    
    var cartItems = [];
    for(var i = 0; i < cart.length - 1; i++){
      
       cartItems.push(cart[i].itemName)
       if (cartItem.length ===1)
       return `In your cart, you have ${cart[i].item} at $17.`
       
    }
   
 /* }
}
  
  if (cart.length === 1) 
   return (`In your cart, you have ${cart.itemName}  at $${cart.price}`  )
  
}

function total() {
  var sum = 0
for (var i = 0; i< cart.length; i++) {
  sum += cart.price[i];
  return sum;
  */
}

}



function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
