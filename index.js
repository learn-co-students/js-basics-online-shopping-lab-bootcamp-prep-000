
var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  var newObj = Object.assign( {itemName : item , itemPrice : price})
   cart.push(newObj);
   return `${item} has been added to your cart.`

}


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1 ) {
    return  `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.` ;
  } else if ( cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
   } else if (cart.length === 3) {
     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
 }
}


function total() {
 var subTotals = [] ;
 for (var i = 0 ; i < cart.length; i++) {
   subTotals.push(cart[i].itemPrice) ;
 }
 var grandTotal = 0 ;
  for ( var j = 0; j < subTotals.length; j++){
    grandTotal += subTotals[j] ;
  }
  return grandTotal;
}

function removeFromCart(item) {
  for(var i in cart) {
    if(cart[i].itemName === item){
    cart.splice(i, 1) ;
    return cart;
    }
  } return "That item is not in your cart.";
}



function placeOrder(cardNumber) {
 var grandTotal = `${total()}`
  if (!cardNumber) {
      return "Sorry, we don't have a credit card on file for you.";
    } else {
      cart = [] ;
      return `Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`;
   }
}
