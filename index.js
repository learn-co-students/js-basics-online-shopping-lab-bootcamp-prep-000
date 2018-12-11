var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var a = [];
  if(cart.length===0){
    return "Your shopping cart is empty."
    }
  for(var i = 0; i < cart.length; i++){
    if(cart.length===1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if(cart.length===2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else{
      if(i<cart.length-1){
        a.push(" "+cart[i].itemName+" at $"+cart[i].itemPrice)
      }
      else{
       return `In your cart, you have`+a+`, and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
        }
        
    }// for loop
} // Function

function total() {
  var sum =0;
  for(var i = 0; i < cart.length; i++){
    
    sum += parseInt(cart[i].itemPrice);
  }
  return sum;
}

function removeFromCart(item) {
  for(var i = 1;i<cart.length;i++){
    if(cart[i].itemName===item){
      cart.splice(i,1);
      return cart;
    }
  }// for
      return "That item is not in your cart.";
}// function

function placeOrder(cardNumber) {
if(cardNumber === undefined || cardNumber===0){
  return "Sorry, we don't have a credit card on file for you."
}
else{
 total();
 var final = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
 cart = [];
 return final
}
}
