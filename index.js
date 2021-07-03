var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var newItem = {[item] : itemPrice};
  cart = [...cart, newItem]
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }else if (cart.length === 1){
    var key = Object.keys(cart[0])[0];
    var price = cart[0][key];
    console.log(`In your cart, you have ${key} at $${price}.`);
  }else if (cart.length === 2){
    var key1 = Object.keys(cart[0])[0];
    var price1 = cart[0][key1];
    var key2 = Object.keys(cart[1])[0];
    var price2 = cart[1][key2];
    console.log(`In your cart, you have ${key1} at $${price1} and ${key2} at $${price2}.`);
  }else{
    var cartString = "";
    for(var i = 0; i < (cart.length - 1); i++){
      var key = Object.keys(cart[i])[0];
      var price = cart[i][key];
      cartString = `${cartString} ${key} at $${price},`;
    }
    var key = Object.keys(cart[(cart.length - 1)])[0];
    var price = cart[(cart.length - 1)][key];
    cartString = `${cartString} and ${key} at $${price}.`;
    console.log(`In your cart, you have${cartString}`);
  }
}

function total() {
  if (cart.length === 0){
      return 0;
  }else{
    var total = 0;
    for(var i = 0; i < cart.length; i++){
      var key = Object.keys(cart[i])[0];
      var price = cart[i][key];
      total = total + parseInt(price);
    }
    return total;
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }else{
    var totalCost = total();
    cart = [];
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  }
}
