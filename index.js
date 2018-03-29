var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 let newObj = {itemName:item, itemPrice:price};
 cart.push(newObj);
 return `${item} has been added to your cart.`;
 
}

function viewCart() {
  let cartItems = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
  for (var i = 0; i < cart.length; i++) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice} `);
  } if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }


//function total() {
 // let totalCost = 0;
 // for (var i = 0; i < cart.length; i++) { 
    totalCost = totalCost + cart[i].itemPrice;
    }
    //return totalCost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}