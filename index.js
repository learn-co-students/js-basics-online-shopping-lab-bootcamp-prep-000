var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 var obj = {};
 obj[itemName] = name;
 obj[itemPrice] = Math.floor(Math.random() * 101);
 cart.push(obj);
 obj = {};
 return `<${name}> has been added to your cart. `;
}

function viewCart() {
  let str = '';
  if(cart.length === 0) return 'Your shopping cart is empty.';
  else if(cart.length === 1) return `In your cart, you have ${cart[0][itemName]} at $${cart[0][itemPrice]}.`;
  else if(cart.length >1){
    str += `In your cart, you have ${cart[0][itemName]} at $${cart[0][itemPrice]},`
  for(i=1;i<cart.length;i++){
    str += ` ${cart[i][itemName]} at $${cart[i][itemPrice]},`
  }
  str.split(' ').splice(-4, 0, 'and');
  str.splice(-1, 1, '.')
  }
  return str;
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
