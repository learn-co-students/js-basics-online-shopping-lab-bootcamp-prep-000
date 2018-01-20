var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = {};
 var itemPrice = Math.floor(Math.random() * 101);
 itemObject[item] = itemPrice;
 cart.push(itemObject);
 console.log (item + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length > 0){
    while (cart.length !== 0){
      if (cart.length == 1){
        console.log ("In your cart, you have " + Object.keys(cart)[0] + " at $" + cart[0] +".");
      }else if (cart.length == 2){
        console.log ("In your cart, you have " + Object.keys(cart)[0] + " at $" + cart[0] + " and " + Object.keys(cart)[1] + " at $" + cart[1] + ".");
      }else if (cart.length == 3){
        console.log("In your cart, you have" + Object.keys(cart)[0] + " at $" + cart[0] + " ," + Object.keys(cart)[1] + " at $" + cart[1] + " , and " + Object.keys(cart)[2] + " at $" + cart[2] + ".");
      }
    }
  }else {
    console.log("Your shopping cart is empty.");
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
