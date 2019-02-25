var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
 
function addToCart(item) {
  var price = parseInt(Math.random() * 100);
  cart.push({itemName : item, itemPrice : price});
  return `${item} has been added to your cart.`;  
}

function viewCart() {
  if (cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  
if (cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }

else{
     var sentence = 'In your cart, you have';
     for (var i = 0; i < cart.length-1; i++){
          sentence += ' ';
          sentence += cart[i].itemName;
          sentence += ' at $';
          sentence += cart[i].itemPrice;
          sentence += ',';
      }
  sentence += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  return sentence;
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var original_length = cart.length;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
    }
  }
  if (cart.length === original_length){
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber){
  if (arguments.length === 0){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  var sum = total();
  cart = [];
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
}
