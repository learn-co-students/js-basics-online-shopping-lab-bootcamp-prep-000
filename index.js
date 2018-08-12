var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = Math.floor((Math.random()*100)+1);
 
 cart.push({
    itemName:itemName,
    itemPrice:itemPrice
   });
  return `${itemName} has been added to your cart.`;
}



function viewCart() {
  var viewItem;
  if (cart.length === 0){
    viewItem = `Your shopping cart is empty.`;
    return viewItem;
  }
  viewItem = `In your cart, you have`;
  for (let i = 0; i < cart.length; i++){
    if(cart.length === 1) {
      viewItem += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
    }
    else if (i === cart.length - 1){
      viewItem += ` and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
    }
    else {
      viewItem += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
    }
  }
  return viewItem;
}



function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
    sum = sum + cart[i]['itemPrice']
  }
  return sum;
}



function removeFromCart(item) {
  for (let i = 0; i< cart.length; i++){
    if (cart[i].itemName == item){
      cart.splice(i,1)
      return cart;
    }
  }
  return "That item is not in your cart.";
}
  


function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else{
    var totalOrder = total();
    cart = [];
    return `Your total cost is $${totalOrder}, which will be charged to the card ${cardNumber}.`
  }
}
























