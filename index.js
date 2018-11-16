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
 var cartObject = {};
 var price = Math.floor(Math.random() * 100);
 cartObject.itemName = item;
 cartObject.itemPrice = price;
 cart.push(cartObject);
 return `${cartObject.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else{
    var sentence = "In your cart, you have ";
    for(let i=0; i< cart.length; i++){
      if (cart.length === 1){
      sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      return sentence;
      }
      else if (i === cart.length - 1){
        sentence = sentence + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        return sentence;
      }
      else{
          sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
  }
}

function total() {
  // write your code here
  var total = 0;
  for (let i=0; i<cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i= 0; i< cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var totalCost = total();
  var sentence = `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  cart.splice(0);
  return sentence;
}
