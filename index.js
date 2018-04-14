var cart = [];

function getCart() {
   return cart;
}

function setCart(c) {
   cart = c;
   return cart;
}

function addToCart(item) {
   var itemName = item;
   var itemPrice = Math.floor(Math.random()*100);
   var cartobj = {itemName : itemName, itemPrice : itemPrice};
   cart.push(cartobj);
   return `${itemName} has been added to your cart.`;
}

function viewCart() {
   var arrayitemprice = [];
   if (cart.length>0){
     for (var i = 0; i < cart.length; i++){
        if ( cart.length > 1 && i === cart.length - 1){
           arrayitemprice[i] = " and " + cart[i].itemName + " at $" + cart[i].itemPrice;
        }
        else arrayitemprice[i] = ' ' + cart[i].itemName + " at $" + cart[i].itemPrice;
     }
             return `In your cart, you have${arrayitemprice}.`;
   }
  else return `Your shopping cart is empty.`;
}

function total() {
   var sum = 0;
   for (var i = 0; i < cart.length; i++){
     sum += cart[i].itemPrice;
   }
   return sum;
}

function removeFromCart(item) {
   var index = 0;
   for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === item) {
         index = i;
         cart.splice(index, 1);
         return cart;
      }
   }
   return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
   if (cardNumber != null){
      var cost = total();
      cart = cart.slice(cart.length);
      return `Your total cost is $` + cost + `, which will be charged to the card ${cardNumber}.`
   }
   return `Sorry, we don't have a credit card on file for you.`;
}
