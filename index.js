var cart = [];

//newCart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(item + " has been added to your cart.")
  return cart;
}


function viewCart() {
if(cart.length === 0){
  console.log("Your shopping cart is empty.");
}
var itemsAndPrices = [];
for(var i = 0; i < cart.length; i++){
  var itemAndPrice = cart[i];
  var item = Object.keys(itemAndPrice)[0];
  var price = itemAndPrice[item];

  itemsAndPrices.push(`${item} at $${price}`);
}
console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.` );
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    for(var itemName in cart[i]){
      if(itemName === item){
        cart.pop(i);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(creditCardNumber){
  if (!creditCardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCardNumber + ".");
  }
  for(var i = 0; i < cart.length; i++){
    cart.pop(i);
  }
}
