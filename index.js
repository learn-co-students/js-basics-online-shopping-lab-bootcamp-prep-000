var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var temp = new Object({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1});
  cart.push(temp);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var view = "In your cart, you have ";
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } 
  for (let i = 0; i <= cart.length; i++){
    if (cart.length === 1){ return view += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    if (i < cart.length - 1){
      view +=`${cart[i].itemName} at $${cart[i].itemPrice}, `;
    } else {
      view +=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
  }
  return view;
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
addToCart("dog");
viewCart();
console.log(cart);
