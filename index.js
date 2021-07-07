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
    itemPrice: Math.floor(100*Math.random())
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    var newVar = `In your cart, you have `;
    var countdown = cart.length;
    
  for (var i = 1; i < countdown; i++) {
    newVar = newVar + `${cart[i-1].itemName} at $${cart[i-1].itemPrice}, `;
  }
  newVar = newVar + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  return `${newVar}`;
  }
}

function total() {
  var newVar = 0;
  var countdown = cart.length;
  for (var i = 0; i < countdown; i++){
    newVar = newVar + cart[i].itemPrice;
  }
  return newVar;
}

function removeFromCart(itemName) {
  var checkItem = false;
  var itemIndex;
  var newVar = cart;
  for (var i = 0; i < newVar.length;  i++){
      if (newVar[i].itemName === itemName){
      itemIndex = i;
      checkItem = true;
      cart.splice(itemIndex,1);
      }
  }
  if (checkItem === false){
    return `That item is not in your cart.`;
    }
  else {
      return cart;
  }
  }

function placeOrder(cardNumber) {
  if (cardNumber !== undefined){
  var totalcart = total();
  cart = [];
  return `Your total cost is $${totalcart}, which will be charged to the card ${cardNumber}.`;
  }
  else {
  return `Sorry, we don't have a credit card on file for you.`;
  
  }
}
