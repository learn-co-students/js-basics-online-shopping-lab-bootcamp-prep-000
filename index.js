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
 var success = `${item} has been added to your cart.`;
 var price = Math.floor(Math.random() * 100 ) + 1;
 var addedObj = {};
 
 addedObj.itemName = item;
 addedObj.itemPrice = price;
 
 cart.push(addedObj);
 //console.log(price);
 return success;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else{
    var outputString = `In your cart, you have `
    for(var i = 0 ; i < cart.length ; i++){
      if(i == cart.length - 1){
        if(i===0){
          outputString = outputString +  `${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
        else{
          outputString = outputString + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
      }
      else{
        outputString = outputString + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return outputString;
  }
}

function total() {
  // write your code here
  var totalAmt = 0;
  for (var i = 0 ; i<cart.length ; i++){
    totalAmt = totalAmt + cart[i].itemPrice;
  }
  return totalAmt;
}

function removeFromCart(item) {
  // write your code here
  var removedItem = false;
  for (var i = 0; i<cart.length;i++){
    if (cart[i].itemName == item){
      cart.splice(i,1);
      removedItem = true;
    }
  }
  if(removedItem === false){
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else{
    var totalCost = total(cart);
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
