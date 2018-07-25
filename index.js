var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {itemName: item, itemPrice: Math.floor(Math.random() * Math.floor(100))};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // const c = cart.length;
  if(cart.length < 1){
     return "Your shopping cart is empty.";
  }
  else{
    var str = "In your cart, you have";
    if(cart.length < 2){
      str += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      return str;
    }
    else{
      for(var i = 0; i < cart.length - 1; i++){
        str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
      str += ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
      return str;
    }
    
  }
  
}

function total() {
  var totalAmount = 0;
  for(var i = 0; i < cart.length; i++){
    totalAmount += cart[i].itemPrice;
  }
  return totalAmount;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      // console.log(delete cart[i])
      var newCart = cart.slice(0, i).concat(cart.slice(i + 1));
      cart = newCart;
      return newCart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var totalAmount = total();
    cart = [];
    return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`;
  }
  
}