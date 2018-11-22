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
   itemName:item,
   itemPrice:Math.floor(Math.random()*100)
 };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    var list = "In your cart, you have ";
    for (var i = 0; i <cart.length;i++){
      if (i === cart.length-1 && cart.length === 1){
        list += (`${cart[i].itemName} at $${cart[i].itemPrice}.`)
      } else if (i === cart.length-1 && cart.length>1){
        list += (`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      } else {
        list += (`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      }
    }
    return list;
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i<cart.length;i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0;i<cart.length;i++){
    if(item === cart[i].itemName){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}




