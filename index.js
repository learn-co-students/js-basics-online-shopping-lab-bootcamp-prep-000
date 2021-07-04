var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var itemObj = new Object ({itemName: item, itemPrice: price});
  cart.push(itemObj);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var result = "In your cart, you have";
  for (var i = 0; i < cart.length; i++){
    var c = ` ${cart[i].itemName} at $${cart[i].itemPrice
    },`;
    if (i === cart.length - 1 && cart.length > 1) {
      result += " and";
    }
    result += c;
  }
  result = result.slice(0,-1);
  result += ".";
  return result;
}

function total() {
  var result = 0;
  for(var i=0; i<cart.length; i++){
    result += cart[i].itemPrice;
  }
  return result;
}

function removeFromCart(item) {
 for(var i=0; i < cart.length; i++){
  if(item === cart[i].itemName){
    return cart.splice(i,1);
  }
 }
 return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var result = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return result;
}
