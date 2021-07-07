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
 var price = Math.floor(Math.random()*101+1);
  var itemDetail = {itemName: item, itemPrice: price};
  cart.push(itemDetail);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length>0){
    var shoppingCart ="In your cart, you have";
    for (var i = 0; i < cart.length; i ++){
      if (i === cart.length -1){
        if (i===0){
          shoppingCart = `${shoppingCart} ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
        } else {
          shoppingCart = `${shoppingCart} and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
        }
      } else {
        shoppingCart = `${shoppingCart} ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
      }
    }
    return shoppingCart;
  } else{
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++){
    totalCost = totalCost + cart[i]['itemPrice'];
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  var position = -1;
  for (var i = 0; i<cart.length;i++){
    if (cart[i].itemName === item){
      position = i;
    }
  }
  if (position >= 0){
    cart.splice(position,1);
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var output = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.splice(0,cart.length);
    return output;
  }
}
