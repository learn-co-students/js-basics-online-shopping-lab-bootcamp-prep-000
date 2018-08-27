var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var NewItem = {itemName: item, itemPrice:Math.floor(Math.random() * 101) };
cart.push(NewItem);
return item + " has been added to your cart.";
}

function viewCart() {

   if (cart.length === 0){
     return "Your shopping cart is empty."
     
   }
if(cart.length === 1) {
      for (var i = 0;i<cart.length;i++){
     return  `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
  }
  var array = [];
  if (cart.length === 2){
    for(i = 0; i<cart.length;i++){
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)}
      return `In your cart, you have ${array[0]}, and ${array[1]}.`
    }
    var array2 = [];
    if (cart.length>2){
      for (i =0; i<(cart.length - 1);i++){
        array2.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      var x = (cart.length - 1)
      return `In your cart, you have${array2}, and ${cart[x].itemName} at $${cart[x].itemPrice}.`
      
    }
}


function total() {
  var p = 0
  for(var i = 0;i<cart.length;i++){
   p += parseInt(cart[i].itemPrice);
  }
  return p 
}

function removeFromCart(item) {
  for (var i = 0;i<cart.length;i++){
    if (cart[i].intName === item){
      
    }
  }
}

function placeOrder(cardNumber) {
 if(cardNumber){
   var k = total()
   cart = []
   return `Your total cost is $${k}, which will be charged to the card ${cardNumber}.`
  
 }
 else{ return "Sorry, we don't have a credit card on file for you."
   
 }
}
