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
   var newItem = {}
   
   newItem.itemName = item;
   
   var priceMin = Math.ceil(1);
   var PriceMax = Math.floor(100);
   newItem.itemPrice = Math.floor(Math.random() * (PriceMax - priceMin + 1)) + priceMin;
   
   cart.push(newItem);
   return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
    return "Your shopping cart is empty.";
  }
  else{
  
    var statement = "In your cart, you have "
    for (let i = 0; i < cart.length; i++){
      statement = statement + `${cart[i].itemName} at $${cart[i].itemPrice}`
      
      if (i == cart.length-1){
        statement = statement + '.';
      }
      else if (i == cart.length-2 && cart.length!=1){
        statement = statement + ", and ";
      }
      else {
        statement = statement + ", "
      }
    }
    return statement;
  }
}


function total() {
  // write your code here
  var totalValue = 0;
  for (let i = 0; i < cart.length; i++){
  totalValue = totalValue + cart[i].itemPrice;
  }
  return totalValue;
}


function removeFromCart(item) {
  // write your code here
  var itemcheck = 0;
  for (let i = 0; i < cart.length; i ++){
    if (cart[i].itemName == item){
      cart.splice(i,1);
    }
  }
  if (itemcheck === 0){
    return "That item is not in your cart."
  }
  else{
    return cart;
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{ 
    var totalValue = total();
    cart = [];
    return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`;
}
}

