var cart = [];
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( {itemName:`${item}`,
        itemPrice: Math.floor(Math.random()*100)
 });
 return `${item} has been added to your cart.`;
}


function viewCart() {
    if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length === 2){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else{
    var bigCart =[];
      for(let i = 2; i < cart.length; i++){
        bigCart.push(`, and ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }//for loop end
    
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}${bigCart.toString()}.`
  }//else end
}// view cart end


function total() {
  var finalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    finalPrice += cart[i].itemPrice;
  }
return finalPrice;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
  if(item == cart[i].itemName){
    cart.splice(i,1);
    return cart;
    }//end if
  }// end for
    return "That item is not in your cart.";
}// end function

function placeOrder(cardNumber) {
  if(cardNumber !== undefined){
    var finalPrice = total();
       cart = [];
    return `Your total cost is $${finalPrice}, which will be charged to the card ${cardNumber}.`;
     }
     else{ 
       return "Sorry, we don't have a credit card on file for you.";
     }
}