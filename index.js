var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 101);
    
    cart.push(new Object({itemName:item,itemPrice:price}))
    
    return `${item} has been added to your cart.`

}

function viewCart() {
  var result = 'In your cart, you have ';
    if (cart.length === 0) {
   return "Your shopping cart is empty.";
  }
  
  for (var i = 0; i < cart.length; i++) {
    for(var j in cart[i]){
            if (cart.length === 1) { return result += `${cart[0].itemName} at $${cart[0].itemPrice}.`}
            
  else if (cart.length === 2) { return  result +=`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`}
  else {
     
   while(i<cart.length-1){
                  result+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
              }
  //  else{                 
                //  result+= `and ${cart[i].itemName} at //$${cart[i].itemPrice}`
            //  }
              
              
   return result
    
  
}
}}}




function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
