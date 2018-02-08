var cart = [];

function randomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = randomNumber();
 cart.push({[itemName]:itemPrice});
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var string = "In your cart, you have "
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }else{
    for(var i = 0; i<cart.length;i++){
      var newCart = cart[i];
      var key = Object.keys(cart[i]);
      var itemCost = newCart[key];
      if(cart.length === 1){
        string = string + `${key} at $${itemCost}.`;
      }else if(cart.length === 2){
        if (i === 0 ){
          string = string + `${key} at $${itemCost} and `;
        }else{
          string = string + `${key} at $${itemCost}.`;
        }
      }else if (cart.length > 2){
        if (i < cart.length - 1){
          string = string + `${key} at $${itemCost}, `;
        }else{
          string = string + `and ${key} at $${itemCost}.`;
        }
      }
    }
    return console.log(string);
  }
  
}

function total() {
  var newTotal = 0;
  for (var i = 0; i<cart.length; i++){
    var newCart = cart[i];
    var key = Object.keys(cart[i]);
    var itemCost = newCart[key];
    newTotal = newTotal + itemCost;
  }return newTotal;
}

function removeFromCart(item) {
  var inCart = [];
  for (var i = 0;i<cart.length;i++){
    var newCart = cart[i];
    var key = Object.keys(cart[i]);
    if (newCart.hasOwnProperty(item)){
      inCart = cart.splice(i,1);
    }
  }
  if (inCart.length === 0){
    return console.log("That item is not in your cart.");
  }else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  var string = "";
  
  if (cardNumber === undefined){
    return console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    string =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return console.log(string);
  }
}
