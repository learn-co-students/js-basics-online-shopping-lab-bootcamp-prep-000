var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object({
  itemName: "",
  itemPrice: null
});
 var randomNum = Math.floor(Math.random() * 101);
 newItem.itemName = item;
 newItem.itemPrice =  randomNum;
 cart.push(newItem);
 
 return `${newItem.itemName} has been added to your cart.`;

}

function viewCart() {
 var inCart = "In your cart, you have ";
 if (cart.length > 0){  
  for (let i = 0; cart.length > i; i++){
   var itemAtPrice = `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i < cart.length-1){
       
       inCart += `${itemAtPrice}, `;
    }
      else if(cart.length === 1){
        inCart += `${itemAtPrice}.`;
      }
    else{
      inCart += `and ${itemAtPrice}.`;
    }
    }
    return inCart;
 }
 else{
   return `Your shopping cart is empty.`;
 }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
      sum += cart[i].itemPrice;
      console.log(sum);
  }
  return sum;
}

function removeFromCart(item) {
    for (var i = 0; cart.length > i; i++){
      if (item === cart[i].itemName){
         cart.splice(i, 1);
      return cart;
      }
        
    }
      return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var yourTotal = "Your total cost is";
  var willBeCharged = ", which will be charged to the card ";
  
  if (cardNumber){
     var string = `${yourTotal} $${total()}${willBeCharged}${cardNumber}.`;
     cart = [];
      return string;
  }
  
  else{
  return "Sorry, we don't have a credit card on file for you.";
  }
  
}
