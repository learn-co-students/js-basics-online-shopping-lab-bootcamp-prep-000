var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //potentially convert this to a function
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({itemName: `${item}`, itemPrice: parseInt(`${price}`)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  //loop over all items in cart
  
}
//return all contents as a single coherent statement
//"In your cart, you have itemName at itemPrice, itemName2 at itemPrice2, and itemName3 at itemPrice3."
//If the cart is empty, return "Your shopping cart is empty."

function total() {
  var totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    totalValue = totalValue + cart[i].itemPrice;
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


// cart = [ 
//   { itemName:"bananas", itemPrice: 17 },
//   { itemName:"pancake batter",itemPrice: 5 },
//   { itemName:"eggs", itemPrice: 49 }
// ]