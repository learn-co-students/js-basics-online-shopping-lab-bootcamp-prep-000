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
var firstSent = ("In your cart, you have "+ cart[0].itemName + " at $" + cart[0].itemPrice + ", " + cart[1].itemName + " at $" + cart[1].itemPrice + ", ")

var lastSent = (+ " and " +lastItem +" at $" +lastPrice +"."  )

//NEXT TRY TO FIGURE OUT WHY CART[X].ITEMNAME DOES NOT WORK
for (x=2; x< cart.length -1;x++){
  var midSent = cart[x].itemName + " at $" + cart[x].itemPrice + " ,"
  return midSent
}
return (firstSent + midSent + lastSent)
}
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
