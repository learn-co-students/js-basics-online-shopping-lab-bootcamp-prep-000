var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random()*100)+1);
  cart.push({[item]: itemPrice});
  /* I can't seem to get the price to be recognized as an interger*/
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var fullCart = [];
  if (cart.length < 1){
    console.log("Your shopping cart is empty.");
    return cart;
  }else {
    for(var x = 0; cart.length > x; x++){
      fullCart.push(cart[x] + " at $" + x.price);
    }
    return "In your cart, you have" + fullCart + "."
  }
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
