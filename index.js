var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var newItem = { 
  itemName: item,
  itemPrice: Math.floor(Math.random() * 100) + 1 
};
cart.push(newItem);
return `${item} has been added to your cart.`
 
}

function viewCart() {
  
  if (0<cart.length) {
    var string = 'In your cart, you have';
    for(var i = 0; i < cart.length; i++){
      // string = string + ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
      if (i === cart.length - 1 && 1 == cart.length){
        string = string + ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      }
      else if(i === cart.length - 1) {
        string = string + ` and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      }
      else {
        string = string + ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
      }
    }
    return(string);
  }
  else {
    return('Your shopping cart is empty.');
  }
}

function total() {
  // write your code here
  var total = 0 
  for(var i = 0; i < cart.length;i++){
    total = total + cart[i]['itemPrice']
  }
  return total 
}

function removeFromCart(item) {
    var i = 0 
    while (i < cart.length){
      if (cart[i]['itemName'] === item) {cart.splice(i,1);}
      else {i++}
    }
      if (i == cart.length) {return'That item is not in your cart.'}
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else if (cardNumber) {
    var total = 0 
    var i = 0 
    while (i < cart.length){
      total = total + cart[i]['itemPrice']
      cart.splice(i,1)
      i++
    }
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
