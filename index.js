var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * (100 - 1 + 1))
    item = {
     itemName: item,
     itemPrice: price
     };
cart.push(item);
return item.itemName + " has been added to your cart.";  
}
 

/*
addToCart("apples");
addToCart("banannas");
addToCart("carrots");
addToCart("daikon");
addToCart("eggplant"); */



function viewCart () {
var newArray = [];
  if (cart.length == 1) {
    for (var i = 0; cart.length; i++) {  
           var v = cart[i].itemName;
           var p = cart[i].itemPrice;
           newArray.push("" + v + ' at $' + p);
           return "In your cart, you have " +  cart.slice(-1)[0].itemName + ' at ' +"$"+ cart.slice(-1)[0].itemPrice + '.';
           }
  } else if (cart.length == 2) {
    for (var i = 0; cart.length == 2; i++) {  
           var v = cart[i].itemName;
           var p = cart[i].itemPrice;
           newArray.push("" + v + ' at $' + p);
           return "In your cart, you have " + newArray.join(', ') + ", and " + cart.slice(-1)[0].itemName + ' at ' +"$"+ cart.slice(-1)[0].itemPrice + '.';
          }
  } else if (cart.length >= 3) {
        for (var i = 0, l = cart.length - 1; i < l; i++) {  
          var v = cart[i].itemName;
          var p = cart[i].itemPrice;
           newArray.push("" + v + ' at $' + p);
         }
         return "In your cart, you have " + newArray.join(', ') + ", and " + cart.slice(-1)[0].itemName + ' at ' +"$"+ cart.slice(-1)[0].itemPrice + '.';
  } else {
    return "Your shopping cart is empty.";
}
}

function total(){
  var addition = [];
  var total = 0;
  for (var i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice;
  }
  return total   
}
/*
function removeFromCart(item){
  var errormsg = "That item is not in your cart."
  for (var i = 0; i < cart.length; i++) {
    var v = cart[i].itemName;
    var p = cart[i].itemPrice;
    if (cart[i].itemName == item ) {
      cart.splice(i, 1);
      return cart;
      }
       else {
        console.log(errormsg)
    }  }
} 
*/
/*
function removeFromCart(item){
  for (var i = 0; i < cart.length; i--) {
    var v = cart[i].itemName;
    var p = cart[i].itemPrice;
    if (cart[i].itemName != item ) {
      return "That item is not in your cart.";
    }
     else {
      cart.splice(i, 1);
      console.log(cart);
   } }
} */

function removeFromCart(item){
 for(var i = 0; i < cart.length; i++ ){
       if(cart[i].itemName === item){
        cart.splice(i, 1);
        return cart;
       }
}
return "That item is not in your cart."
}

addToCart("vanilla");
addToCart("watermelon");
addToCart("yams");


var finalMessage = [];

function placeOrder(creditCard){ 
if (creditCard === undefined) {
 var msg = "Sorry, we don\'t have a credit card on file for you.";
 return msg;
} else if (creditCard !== undefined) {
 finalMessage.push(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
 cart.length = 0;
 return finalMessage.toString(); 
}
}
