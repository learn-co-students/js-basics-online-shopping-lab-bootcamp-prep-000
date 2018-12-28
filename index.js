var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
let item = {itemName: itemName, 
  itemPrice:Math.floor(Math.random() * 100) + 1};
  cart.push(item);
  return `${[itemName]} has been added to your cart.`;
}

function viewCart() {
  cart = getCart();
  if (cart.length===0){
    return `Your shopping cart is empty.`;
  } else if(cart.length===1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var empty = [];
    for (let i = 0; i<cart.length; i++) {
      if (i===cart.length-1){
        empty.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`);
      } else {
      empty.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
    return `In your cart, you have ${empty.join(", ")}.`; 
  }
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
  sum += cart[i].itemPrice; 
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
}
