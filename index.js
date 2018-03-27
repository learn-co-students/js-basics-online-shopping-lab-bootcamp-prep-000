var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
    cart[itemName] = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1)) + Math.ceil(1));
    debugger;
    return `${itemName} has been added to your cart.`
}

function viewCart() {
//  if (!cart.length) {
//    return "Your shopping cart is empty."
//  }
  const itemNamesAndPrices = []
  for (var i = 0; i < cart.length; i++) {
    //itemNamesAndPrices.push(`In your cart, you have ${itemName.join(', ')}`)
    itemNamesAndPrices.push(`${cart[i]}`);
    console.log(cart[i]);
  }
  return itemNamesAndPrices;
}

function total() {
  return cart.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
