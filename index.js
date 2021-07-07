var cart = [];
var item = {};
var totalSum;


function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var item = {};
item.itemName =itemName;
item.itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
cart.push(item);
return (`${item.itemName} has been added to your cart.`);
}



function viewCart() {
var startString = `In your cart, you have`;
var cartContains = cart.map(cart=>{return ` ${cart.itemName} at $${cart.itemPrice}`;});
 
  if (cart.length === 0){
    return ("Your shopping cart is empty.");
  }
  else if(cart.length ===1){
    return(startString+cartContains+".");
  }
  
  else if (cart.length === 2){
    return(startString+cartContains[0]+ ","+" and"+cartContains[1] +".");
  }
  
  else if (cart.length > 2){
    var lastStr = cartContains[cart.length-1];
    var templength = lastStr.length;
    
    for(var j = 0; j<cart.length-1; j++){
     var temp = startString+cartContains+",";
     var tempRemoveLast = temp.slice(0,-templength);
    }
    return (tempRemoveLast + "and"+ cartContains[cart.length-1]+".");
  }
  
}

function total() {
var cartItems = cart.map(cart=>{return cart.itemPrice;});
for (var i=0, sum=0; i<cartItems.length; i++) {
 var cartItemsSum = parseInt(cartItems[i]);
 sum += cartItemsSum;
 totalSum = sum;
 
}
return sum;
  
}

function removeFromCart(item) {
  var cartItems = cart.map(cart=>{return cart.itemName;});
  if(cartItems.includes(item)){
    
   var itemIndex = cartItems.indexOf(item);
   var removed = cart.splice(itemIndex, 1);
   return cart;
  }
  else{
   
    return ("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    total();
    var emptyCart = cart.splice(0);
    return (`Your total cost is $${totalSum}, which will be charged to the card ${cardNumber}.`);
  }
  else{
    return ("Sorry, we don't have a credit card on file for you.");
  }
}

