var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: [item], itemPrice: Math.floor(Math.random()*100)});
  return `${cart[cart.length-1].itemName} has been added to your cart.`; 
}

function viewCart() {
  if(cart.length < 1){
    return "Your shopping cart is empty.";
  }else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    
  }else{
    if(cart.length > 1){ 
      var arrCart = [];
      var arrEnd = [];
      for(var i=0; i<cart.length; i++){
        if(i < cart.length-1){
          arrCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
        }else if(i === cart.length-1){
          arrEnd = ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
        }
      }
    }
  }
  return `In your cart, you have${arrCart} and${arrEnd}.`;
}

function total() {
  var arrSum = 0;
  for(var i=0; i<cart.length; i++){
    arrSum += cart[i].itemPrice;
  }
  return arrSum;
}

function removeFromCart(item) {
	for(var i = 0; i<cart.length; i++){
   	if(cart[i].itemName.includes(item)){
    
    	cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(cardNumber){
    var arrSum = 0;
    for(var i=0; i<cart.length; i++){
      arrSum += cart[i].itemPrice;
    }
    cart.splice(0, cart.length);
    return `Your total cost is $${arrSum}, which will be charged to the card ${cardNumber}.`;
  }else{
    return "Sorry, we don't have a credit card on file for you."
    
  }
}
