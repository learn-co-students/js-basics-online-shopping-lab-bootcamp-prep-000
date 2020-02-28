var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
const price = Math.floor(Math.random()*10)+1;
cart.push({[item]:price});
console.log(`${item} has been added to your cart.`);
return cart;
  
}

function viewCart() {
  const l = cart.length
 
    if(l===0){
      console.log("Your shopping cart is empty.")
      }
   var itemsArr = [];
  for(var i = 0; i < l; i++){
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    itemsArr.push(`${item} at $${price}`);
  }
  switch(itemsArr.length){
    case 1:
      break;
    case 2:
      itemsArr = itemsArr.join(" and ");
      break;
    default:
      itemsArr[l-1] = "and ".concat(itemsArr[l-1]);
      itemsArr = itemsArr.join(", ");
  }
    console.log(`In your cart, you have ${itemsArr}.`);
  
  
}

function total() {
 var total = 0;
 for (var i =0, l = cart.length; i<l; i++){
  for (let item in cart[i]){
    total+= cart[i][item]
  } 
 }
return total;
  
}

function removeFromCart(item) {
 for(var i =0; i<cart.length; i++){
   if(cart[i].hasOwnProperty(item)===true){
     cart.splice(i,1);
     return cart;
   }
 }    
   console.log("That item is not in your cart.");
   return cart;
   }

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart=[];
  
}
    }
