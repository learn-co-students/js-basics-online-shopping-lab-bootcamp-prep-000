var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: item, itemPrice: price});
 return item + " has been added to your cart.";
}  

function viewCart() {
    if(cart.length === 0){
    return "Your shopping cart is empty.";  
  }
  
  else {
    if(cart.length === 1){
      var cartLength1 = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
      return cartLength1;
      
    }
  else {
      if(cart.length === 2){
        
        var cartLength2 = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
        
        return cartLength2;
      }
      else {
        if((cart.length - 1) >= 2){
          for (var i = 0; i < cart.length-1; i++) {
            
            var firstLine = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice},`;
            
            var middleLines = `${getCart()[i].itemName} at $${getCart()[i].itemPrice},`;
            
            }
            
            if ((i === (cart.length - 1))) {
            var lastLine = `and ${getCart()[(cart.length - 1)].itemName} at $${getCart()[(cart.length - 1)].itemPrice}.`;
            }
            return `${firstLine} ${middleLines} ${lastLine}`;
          
          }
        }
      }
  
  }

}

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += getCart()[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  var itemInCart = false;
  if (cart.length > 0){
  for (var i = 0; i < cart.length; i++){
    if (getCart()[i].itemName === item){
      itemInCart = true;
      cart.splice(i, 1);
      return cart;
      }}}
  if (itemInCart === false){
    return 'That item is not in your cart.'}
}
  
 function placeOrder(creditNumber){
    if(!creditNumber){
     return `Sorry, we don't have a credit card on file for you.`;
   } 
    else{
      var totalStatement = `Your total cost is $${total()}, which will be charged to the card ${creditNumber}.`;
      cart = [];
      return totalStatement;
      
     }

 }
 
