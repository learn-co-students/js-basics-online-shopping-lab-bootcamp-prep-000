var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  var itemName = { [item]: itemPrice };
  cart.push(itemName);
  console.log( `${item} has been added to your cart.` );
  return cart;
}

function viewCart() {
  var cartEverything = 'In your cart, you have';
  var cartItems = [];
  var cartPrices = [];
  if (cart.length === 0) {
    console.log( 'Your shopping cart is empty.');
  } else {
    let i = 0;
    while (cart.length > i) {
      cartItems.push(Object.keys(cart[i]));
      cartPrices.push(' at $' + cart[i][Object.keys(cart[i])]);
      cartEverything += ( ' ' + cartItems[i] + cartPrices[i] );
      
      if ((2 < cart.length) && ((i) != (cart.length - 1))) {
        cartEverything += ',';
        
        if ((1 < cart.length) && ((i + 1) === (cart.length - 1))) {
        cartEverything += (' and');
        }
        
      } else if ((1 < cart.length) && ((i + 1) === (cart.length - 1))) {
        cartEverything += (' and');
        
      }
    console.log(i++);  
    }
  }
  console.log( cartEverything + '.');
}
  
function total() {
  var cartTotal = 0;
  let i = 0;
  while (cart.length > i) {
    cartTotal += cart[i][Object.keys(cart[i])];
    console.log(i++);
  }
  return cartTotal;
}

function removeFromCart(item) {
  var isItemInCart = false;
  let i = 0;
  while (cart.length > i) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      isItemInCart = true;
      return cart;
    }
    console.log(i++);
  }
  if (isItemInCart === false) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}


addToCart('apple')
addToCart('banana')
addToCart('candy')

placeOrder(7777)