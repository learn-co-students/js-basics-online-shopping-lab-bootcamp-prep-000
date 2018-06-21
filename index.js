var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = new Object ({ itemName : item,
      itemPrice : Math.floor(Math.random()*101)
  });
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if(!cart.length) return 'Your shopping cart is empty.'
  let itemAndPrice=[];
  let intro='In your cart, you have ';
  for (let i=0; i<cart.length; i++) {
    for (let keys in cart[i]) {
    
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
