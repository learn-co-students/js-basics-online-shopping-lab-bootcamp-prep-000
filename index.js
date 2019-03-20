var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item,itemPrice:Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`;
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    let array = [];
    for (let i = 0; i < cart.length; i += 1) {
      array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
   if (array.length===1){array[0]=`In your cart, you have${array[0]}.`}
   else{array[0]=`In your cart, you have${array[0]}`}
   if (array.length > 1) {
	     array[array.length-1]=` and${array[array.length-1]}.`
	    }
      return array.toString()
  }
  // write your code here
}

function total() {
  let total=0
  for(let i=0;i<cart.length;i++){
    total+=cart[i].itemPrice
  }
  return total
  // write your code here
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
  if(cart[i].itemName===item){
    cart.splice(i,1)
    break;
  }
}
if (!cart.item){
  return "That item is not in your cart."
}
  // write your code here
}

function placeOrder(cardNumber) {
  if(cardNumber!==null&&total()!=0){
    let string=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart=[]
  return string}
  else{
    return "Sorry, we don\'t have a credit card on file for you."
  }
  // write your code here
}
