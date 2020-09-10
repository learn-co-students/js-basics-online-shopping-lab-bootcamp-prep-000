var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
 var price = Math.floor(Math.random()*100) + 1;
 var itemObject = {
   itemName: `${item}`, 
   itemPrice: price
 }
 cart.push(itemObject);
 
 return `${itemObject.itemName} has been added to your cart.`;
 
}

function viewCart() {
 if (cart.length === 0){
   return 'Your shopping cart is empty.';
 }else if (cart.length === 1) {
     return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  }else if (cart.length === 2) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
    }else{
      var newString = "In your cart, you have"
      for (let i = 0; i < cart.length - 1; i++){
        newString = newString + ` ${cart[i].itemName} at $${cart[i].itemPrice},`}
        return newString + ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
      }
      
}
      
function total() {
  var sum = 0; 
  for (var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}  
  



function removeFromCart(item) {
  for  (var i = 0; i < cart.length; i++){
        if (item === cart[i].itemName){
          cart.splice(i,1);
          return cart;
        }
  }
        return "That item is not in your cart.";

}
function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    const finalTotal = total()
    cart = [];
    return (`Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`)
    return cart
  }
}
