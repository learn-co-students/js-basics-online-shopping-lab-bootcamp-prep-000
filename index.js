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
 var newObj = Object.assign({});
 newObj['itemName'] = item;
 newObj['itemPrice'] = Math.floor(Math.random() * 100) + 1;
 cart.push(newObj);
 return `${newObj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length > 0){
    var text = '';
    for(var i = 0; i < cart.length; i++){
      if(cart.length == 1){
        text += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      else if(i != cart.length - 1){
        text += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }else{
        text += `and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
    }
    text = `In your cart, you have ${text}.`;
    return text;
  }else{
    return 'Your shopping cart is empty.';
  }
}

function total(){
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    var values = Object.values(cart[i]);
    if(values.indexOf(`${item}`) > -1){
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var total_ = total();
    cart = [];
    return `Your total cost is $${total_}, which will be charged to the card ${cardNumber}.`;
  }else{
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}
