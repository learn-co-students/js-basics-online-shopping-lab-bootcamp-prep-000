var cart = [];

function setCart(newCart){
  cart = newCart
}

function total(){
  let a = 0;
  var sum = [];
  for(var i = 0; i < cart.length; i++ ){
    a = cart[i].itemPrice + a
  }
 return(a)
}


function getCart(){
  return cart;
}

 function addToCart(item){
var price = Math.floor(Math.random()*99)
var cartObject = {
  itemName: item,
  itemPrice: price
};
cart.push(cartObject);
return(`${item} has been added to your cart.`)

 }

 function viewCart (){
    if(cart.length === 0){
      return(`Your shopping cart is empty.`);
    } else {
     var x = 0;
      if(cart.length === 1){
      for(x in cart){
        return(`In your cart, you have ${cart[x].itemName} at $${cart[x].itemPrice}.`);
      }
      } else{
      if(cart.length === 2){
        for(x in cart){
          var n = 1
          return(`In your cart, you have ${cart[x].itemName} at $${cart[x].itemPrice}, and ${cart[n].itemName} at $${cart[n].itemPrice}.`);
        }
       } else {
         if(cart.length === 3){
           for(x in cart){
             var y = 1
             var yy = 2
          return(`In your cart, you have ${cart[x].itemName} at $${cart[x].itemPrice}, ${cart[y].itemName} at $${cart[y].itemPrice}, and ${cart[yy].itemName} at $${cart[yy].itemPrice}.`);
           }
         }
       }
      }
      
    } /*
  var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(cart[i].itemName + " at $" + cart[i].itemPrice)
      }
    }
    //return(items)
    return console.log("In your cart, you have " + items.join(", ") + ".");
    */
   
 }

 function removeFromCart(item){
   for(var i = 0; i < cart.length; i++){
     if(cart[i].itemName === item){
      return cart.splice(i, 1);
     }
   }
   return(`That item is not in your cart.`)
}

 function placeOrder(cardNumber) {

 if (cardNumber === undefined){
  return("Sorry, we don't have a credit card on file for you.")
}
else{
var lastMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
cart = [];
   return lastMessage
}

 }