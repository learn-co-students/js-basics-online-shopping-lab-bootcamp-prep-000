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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random());
  cart.push({item : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var str = "In your cart, you have "
  if(cart.length==0){
    console.log("Your shopping cart is empty.");
  } else {
//`In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`
    for(var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i]);
      if(i == cart.length-1){
        str += `${item} at ${cart[i][item]}.`;
      } else {
        str += `${item} at ${cart[i][item]}, `;
      }
    }

    }
  }
}
