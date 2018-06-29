var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var price= (Math.random() * 100)

 var newObject={itemName:item, itemPrice:price};
 
newObject[item]={price}

 cart.push(newObject)
  return `${item} has been added to your cart.`;
  

}
function viewCart() {
if( cart.length === 0){
  
  return 'Your shopping cart is empty.';}
}
else if (cart.length === 1){

  var printOneItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  
  
return printOneItem;}


	 else if(cart.length === 2)
	 
	 {var printTwoItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
	   
	 return printTwoItem;   
	   

else if(cart.length === 3)
  
  {var printThreeItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[3].itemName} at $${cart[3].itemPrice}.`
	   
  return printThreeItem;}

 
}

function total() {
  
  
  
}    
function removeFromCart(item) {
  
 
} 
  
  


function placeOrder(cardNumber) {
  
}
