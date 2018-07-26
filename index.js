var cart = []
//{cereal: 'Frosted Flakes', poultry: 'Raw Chicken', coldcuts: 'Turkey Breast', fruit:'Strawberries'};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


  
function addToCart(itemName) {
   var itemPrice = Math.floor(Math.random()*100+1)
  var newObject={itemName: itemName, itemPrice: itemPrice}
  
  cart.push(newObject)

  return itemName + " has been added to your cart.";
}



function viewCart() {

if (cart.length < 1){
  return "Your shopping cart is empty."
}

else if (cart.length <2){
   return ("In your cart, you have "+ cart[0].itemName + " at $" + cart[0].itemPrice + ".")
  }
  
else if (cart.length <3){
  
   return ("In your cart, you have "+ cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".") 
}
else { 
var lastItem = cart[cart.length-1].itemName
var lastPrice = cart[cart.length-1].itemPrice
var x;
var firstSent = "In your cart, you have "
var midSent = ''
for (x=0; x< cart.length -1;x++){
  var at = " at $"
  var comma = ", "
  midSent += cart[x].itemName +  at + cart[x].itemPrice + comma
}
var lastSent = ("and " +lastItem +" at $" +lastPrice +"."  )
return (firstSent + midSent + lastSent)
}
}


function total() {
  var total = 0
  var x;
 for (x=0; x<cart.length; x++){
   total += cart[x].itemPrice 
 }
 return total
}

  
function removeFromCart(item) {

 // var x;
//    for (x=0; x<cart.length; x++){
//      if (cart[x].itemName == item){
  //      return cart.splice(x,1)
//      }
//    return "That item is not in your cart."
//  }

   var ind = cart.indexOf(item).itemName
   if (parseInt(ind)<0){
     return "That item is not in your cart."
   }
   else return cart.splice(ind,1)
 
}



function placeOrder(cardNumber) {
  // write your code here
}
