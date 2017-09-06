var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var itemObject = { [itemName]: itemPrice};
  cart.push(itemObject)
  console.log(`${itemName} has been added to your cart.`);
  return cart
}

function viewCart() {
  var statement = `In your cart, you have `;
  if(cart === []) {
    console.log('Your shopping cart is empty.')
  } else {
    for(var i = 0; i < cart.length; i++) {
      console.log(statement += `${cart[i][itemName]} at $${itemName[itemPrice]}, `)
    }
  }

  return statement.splice(0, statement.length-2, '.')
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
