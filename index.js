var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}


function viewCart() {
  var array = [];

  for ( let i = 0; i < cart.length; i++) {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;}

  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }

  if (cart.length ===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    let lastItem = array.pop();
    return `In your cart, you have ${array.join(', ')}, and ${lastItem}.`
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
