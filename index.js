var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomNum = Math.floor(Math.random() * 101) + 1;
 var itemObj = {[item]: randomNum};
 
 console.log(`${item} has been added to your cart.`);
 cart.push(itemObj);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  
  var cartStr = 'In your cart, you have ';
  
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      var item = [key];
      var price = cart[i][key]
      if (cart.length === 1) {
        console.log(cartStr += `${item} at $${price}.`)
      }
    }
  }
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
