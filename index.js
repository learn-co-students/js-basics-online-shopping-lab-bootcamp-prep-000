var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
 var objectCart = {itemName: `${item}`, itemPrice: getRandomInt(100)};
 cart.push(objectCart);
 return `${item} has been added to your cart.`;
}

function viewCart() {
 var cartList = []
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
   for (var i = 0; i < cart.length; i++) {
     var object = cart[i]
     var key = Object.keys(object)[0]
     var item = object[key]
     var key2 = Object.keys(object)[1]
     var price = object[key2]
     cartList.push(`${item} at $${price}`)
   }
   if (cart.length === 1) {
      return `In your cart, you have ${cartList}.`
   }
  if (cart.length === 2) {
    return `In your cart, you have ${cartList.join(", and ")}.`
    }
    else{
      return `In your cart, you have ${cartList.slice(0, -1).join(", ")}, and ${cartList.slice(-1)}.`
    }
}

function total() {
  var priceList = [];
  for (var i = 0; i < cart.length; i++) {
  var sum = 0
  var object = cart[i];
  var key2 = Object.keys(cart)[1];
  var price = (object[key2]);
  var total = sum + parseInt(price);
  return total;
}
}

function removeFromCart(item) {
  if 
}

function placeOrder(cardNumber) {
  // write your code here
}
