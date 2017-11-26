var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100);
  var itemObject = {
    [item]:itemPrice
  };
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`)
  return (cart);
}

function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  else {
    var cartList = "In your cart, you have ";
    for (itemCount = 0; itemCount < cart.length; itemCount++) {
      if (cart.length === 1) {
        cartList = cartList + `Object.` at ${cart[itemCount][0]}`
        return (`In your cart, you have `)
      }
    }
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
