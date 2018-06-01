var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)+1;
  //var itemName = '';
    cart.push(new Object({['itemName']: item, ['itemPrice']: price}))
    console.log(cart);
    return `${item} has been added to your cart.`

}

function viewCart() {
  var viewList = 'In your cart, you have ';
  if (cart.length === 0) return `Your shopping cart is empty.`
  else {
    for(var i = 0; i < cart.length; i++){
      ('itemName' in cart[i])
      viewList += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
        if (i === cart.length-1) viewList += '.';
        else if (i === cart.length-2) viewList += ', and ';
        else viewList += ', ';;
    }
  }
  return viewList;
}

function total() {
  let totalAmt = 0;
  for(let i = 0; i <cart.length - 1; i++){
    let current = cart['itemPrice'[i]];
    totalAmt += current;
  }
  return totalAmt;
}



function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
