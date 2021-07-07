var cart = [];
var end = [];
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newObject = {
  itemName: item,
  itemPrice: Math.round(Math.random()*100)
};
 cart.push(newObject);
 return(`${item} has been added to your cart.`);
 // write your code here
}

function viewCart() {
 var i;
 var text = "";
 var intro = "";
 var end =  [".", ", and ", ", ", ", ", ", "];
   if (cart.length < 1) {
  text += `Your shopping cart is empty.`;
  }
   else  {
     end.length = cart.length;
for (i = 0; i < cart.length; i++) {
    intro = 'In your cart, you have ';
  text += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}${end.pop()}`;
  }
}
  return(intro + text);
}

function total() {
var i, sum;
var len = cart.length;

for (i = 0, sum = 0; i < len; i++) {
  sum += cart[i].itemPrice;
}
return(sum);
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
}
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return("Sorry, we don't have a credit card on file for you.");
  }
  else { 
    var totalValue = total();
    cart.length = 0;
     return(`Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`);
    
  }
 
}