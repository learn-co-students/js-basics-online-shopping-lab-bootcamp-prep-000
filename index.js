var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 101); 
 var product = {itemName: item, itemPrice: price};
 cart.push(product);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else{
    var string = "In your cart, you have ";
    for(var i = 0; i < cart.length - 1; i++){
      string += `${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}, `;
    }
    if(cart.length > 1){
      string += `and ${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}.`;
    }else{
      string += `${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}.`;
    }
    return string;
  }
}

function total() {
  var cost = 0;
  for(var i = 0; i < cart.length; i++){
    cost += cart[i]["itemPrice"];
  }
  return cost;
}

function removeFromCart(item) {
  var missing = true;
  for(var i = 0; i < cart.length; i++){
    if(cart[i]["itemName"] === item){
      cart.splice(i, 1);
      missing = false;
    }
  }
  if(missing){
    return("That item is not in your cart.");
    
  }
}

function placeOrder(cardNumber) {
  var cost = total();
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }else{
    cart.length = 0;
    return (`Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`);
  }
}
