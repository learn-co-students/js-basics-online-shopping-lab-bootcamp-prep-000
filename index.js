var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var name = item;
  var price = Math.floor(Math.random() * 100);
  var object = {itemName: name, itemPrice: price};
  
  cart.push(object);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var outputString = "In your cart, you have ";
  
  function addToString(string){
    outputString += string;
  }
  
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else {
    for (let i = 0; i < cart.length; i++){
      var object = cart[i];
      var item = object.itemName;
      var price = object.itemPrice;
      
      addToString(`${item} at $${price}`);
     
      if (i === cart.length - 1){
        outputString += ".";
      }
      else if (i === cart.length - 2){
        outputString += ", and ";
      }
      else {
        outputString += ", ";
      }
    }
   
    return outputString;
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++){
    var object = cart[i];
    total += object.itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var itemPresent = false;
  for (let i = 0; i < cart.length; i++) {
    var object = cart[i];
    
    if (item === object.itemName){
      itemPresent = true;
      cart.splice(i,1);
      return cart;
    }
  }
  if (itemPresent === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var totalPrice = total();
  setCart([]);
  return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
}