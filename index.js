var cart = []; 

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code 
 var price = Math.floor(Math.random() * 100);
 var itemObj = {itemName: item, itemPrice: price};
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    return 'Your shopping cart is empty.';
  }else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else{
    var message = "In your cart, you have ";
    var lastItem = cart.length -1;
    for(var i = 0; i < lastItem; i++){
      message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    message += `and ${cart[lastItem].itemName} at $${cart[lastItem].itemPrice}.`
    return message;
  }
}

function total() {
  // write your code here
  var price = 0;
  for (var i = 0; i < cart.length; i++){
    price += cart[i].itemPrice;
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  var foundItem = false;
    for (var i =0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i, 1);
        foundItem = true;
      }
    }
    if (foundItem === false){
      return 'That item is not in your cart.';
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }else {
    var totalMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.length = 0;
    return totalMessage;
  }
}
