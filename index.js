var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1 );
    cart.push(Object.assign({}, { itemName : `${item}`, itemPrice : price } ));
    return `${item}` + " has been added to your cart."
  }


function viewCart(itemName, itemPrice) {
  var cartItems = [];
  if (cart.length === 0) {
    return("Your shopping cart is empty.")
  }
  for (var i = 0; i < cart.length; i++) {
    cartItems.push(`${cart[i].itemName}` + ` at $` + `${cart[i].itemPrice}`);
  }
  if (cart.length === 1) {
  return(`In your cart, you have ` + cartItems.join(" ") + `.`)
} else if (cart.length > 1) {
  var lastItem = cartItems.pop()
  return(`In your cart, you have ` + cartItems.join(", ") + `, and ` + `${lastItem}` + `.`)
}
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
    }
    return totalPrice;
  }

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
