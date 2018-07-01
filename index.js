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
  
  return 'Your shopping cart is empty.';
} else if (cart.length === 1){

  var printOneItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`

  return printOneItem;
  } else if(cart.length === 2){
	 
	 var printTwoItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
	   
	 return printTwoItem; 
    } else if(cart.length === 3){
  
  var printThreeItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
	   
  return printThreeItem;

	 }
}
	function total() {
	 let sum = 0;
	 cart = getCart()
	 for (let i = 0; i < cart.length; i++ ){
	   sum += cart[i].itemPrice
	 }
  return sum
 }

  

function removeFromCart(item) {
  cart = getCart()
  let index;
  for (let i = 0; i < cart.length; i++ ){
    if (cart[i].itemName === item ){
    index = i
    }
  }
  if(index === undefined ){
   return 'That item is not in your cart.' 
  }
  else {
  cart.splice(index, 1);
  return cart
  }
  }
 
function placeOrder(cardNumber) {
if (cardNumber) {  
  var yourTotal = total()
  cart = []
	return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.` } 

	else  { 
	  return 'Sorry, we don\'t have a credit card on file for you.' }
	 
	   
	 
	 
} 
