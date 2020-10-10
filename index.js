var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var groceryItem = {itemName:item, itemPrice: price()};
  cart.push(groceryItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty.";
  }
  else{
    var str = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    if(cart.length>1){
      for(let i = 1;i<cart.length-1;i++){
        str = str + `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      str = str + `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    }
    else{str = str.concat(".")};
  }
  return str;
}

function total() {
  var total = 0;
  for(let i=0;i<cart.length;i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0;i < cart.length; i++){
    if (item === cart[i].itemName){
      cart.splice(i,1);
      return null;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber='') {
  if(cardNumber === ''){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
function price(){
  return Math.floor(Math.random()*99+1);
}
