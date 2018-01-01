var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { [item]: Math.floor((Math.random() * 100) + 1) };
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var cartContents = 'In your cart, you have ';
    for (let i = 0; i <= cart.length - 1; i++) {
      let item = Object.keys(cart[i]);
      let itemName = item[0];
      let itemPrice = cart[i][itemName];
      cartContents += `${itemName} at $${itemPrice}`;
      if (cart.length == 1 || i + 1 == cart.length) {
        cartContents += '.';
      }
      if ( cart.length == 2 && i === 0) {
        cartContents += ' and ';
      }
      if (cart.length >= 3 && i + 1 == cart.length - 1)  {
        cartContents += ', and ';
      }
      if (cart.length >= 3 && i + 1 < cart.length - 1) {
        cartContents += ", ";
      }
    }
    console.log(cartContents);
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
