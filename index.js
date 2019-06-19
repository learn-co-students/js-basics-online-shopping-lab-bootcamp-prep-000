var cart = [];

 function getCart() {
  return cart;
}

 function setCart(c) {
  cart = c;
}

 function addToCart(item)
 {
      var ran_price = Math.floor(Math.random() * 100) +1 ;
      var new_item = {
      itemName : item,
      itemPrice : ran_price,}
    cart.push(new_item);
    return new_item.itemName + ' has been added to your cart.';
  }

 function viewCart() {
  var arr = [];
   for(let i = 0; i < cart.length; i++){
    arr.push(cart[i].itemName + ' at $' + cart[i].itemPrice)
  }
    if (cart.length===0){
      return "Your shopping cart is empty."
    }
    else if(cart.length===1){

       return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
    }
    else if(cart.length===2){
      return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName
      + " at $" + cart[1].itemPrice + ".";
    }
    else{
      let lastItem = arr.pop();
      return 'In your cart, you have '  + arr.join(', ') + ', and ' + lastItem + '.';
    }
}	


 function total() {	
  let totalValue = 0;
  for (let i = 0; i < cart.length; i++){
    totalValue += cart[i].itemPrice;
  }
  return totalValue;
}	


 function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){                   
      cart.splice(i, 1);                                 
      return cart;                                     
    }
  }
  return 'That item is not in your cart.'
}	

 function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}	
