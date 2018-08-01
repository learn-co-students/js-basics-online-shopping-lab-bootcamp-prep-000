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
 var itemObj = {
      itemName: `${item}`,
      itemPrice: Math.floor(Math.random()*100)
    };
    
  //Add the Item object to the Cart array
  cart.push(itemObj);
  
  //Check that it's been added successfully
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var resultantSentence = "In your cart, you have ";
  
  if(cart.length >= 2){
  
    for(var i = 0; i < cart.length -1; i++){
      resultantSentence = resultantSentence + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `;
      }
    resultantSentence = resultantSentence + `and ` + cart[cart.length-1]['itemName'] + ` at $` + cart[cart.length-1]['itemPrice'] + `.`;
    
    return resultantSentence;
  
    
  } else if(cart.length===1){
      resultantSentence = resultantSentence + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
      return resultantSentence;
  } else {
    return `Your shopping cart is empty.`;
  }
}

function total() {
  var runningTotal = 0;
  
  for(let i = 0; i < cart.length; i++) {
    runningTotal += cart[i].itemPrice;
  }
   return runningTotal;
}

function removeFromCart(item) {
  var i = 0;
  while(i < cart.length){
    if(cart[i].itemName === item){
        cart.splice(i,1);
        return cart;
    } else {
        i++;
    }
  }
      return 'That item is not in your cart.';
  
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
      console.log('Sorry, we don\'t have a credit card on file for you.');
      return ('Sorry, we don\'t have a credit card on file for you.');
  } else {
      var totes = total();
      cart = [];
      return `Your total cost is $${totes}, which will be charged to the card ${cardNumber}.`;
  }
}