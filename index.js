var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({itemName: item, itemPrice: itemPrice});
  let itemName = item
  
  itemPrice = window.globalItemPrice
  return (itemName + " has been added to your cart.")

  return cart;
}


function viewCart() {
  while (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  
  let currentCart = [];
  let i = 0
  while(i < cart.length) {
  let item = Object.keys(cart[i])[0]
  let price = cart[i][item]
  currentCart.push(item +" at $" + price);
  i++
  }
  console.log(`In your cart, you have ${currentCart.join(', ')}.`)
}

function total() {
  
  let startPrice = 0
  for (let i = 0; i < cart.length; i++) {
  let price = Object.values(cart[i]) 
  let totalPrice = (startPrice + price)
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
