var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var newItem = {itemName: item, itemPrice: price};
   cart.push(newItem);
   return item +" has been added to your cart.";
 }
 

function viewCart() {
  var cartList = 'In your cart, you have ';
  if(cart.length<1){
    return 'Your shopping cart is empty.';
  }
  else if(cart.length===1){
    return cartList+=`${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else{
    for(var i=0;i<cart.length;i++){
      if(i<cart.length-1){
        cartList+=`${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
      else{
        return cartList+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
    }
    return cartList;
  }
}

function total() {
  var priceTotal=0;
  for(var i=0;i<cart.length;i++){
    priceTotal+= cart[i].itemPrice;
  }
  return priceTotal;
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    if(cart[i].itemName==item){
      return cart.splice(i,1);
    }
  }
    return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  
  if(cardNumber){
    var totalCost=total();
    cart.length=0;
    }
    else{
    return "Sorry, we don't have a credit card on file for you.";
  }
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
    }
