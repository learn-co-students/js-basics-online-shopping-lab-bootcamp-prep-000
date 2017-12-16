var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
var newObject = {};
newObject[item] = price;
cart.push(newObject);
console.log(`${item} has been added to your cart.`)
return cart;
}
addToCart(eggs);

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else {

    var cartContents = [];

    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0];
      let price = cart[i][item];
      cartContents.push(`${item} at $${price}`);
    }


    if (cartContents.length == 1) {
      cartContents;
    } else if (cartContents.length == 2) {
      cartContents = cartContents.join(' and ');
    } else {
      cartContents[cartContents.length - 1] = ', and '.concat(cartContents[cartContents.length - 1]);
      cartContents = cartContents.splice(0, cartContents.length - 1).join(', ') + cartContents[cartContents.length - 1];
    }
  }
  console.log(`In your cart, you have ${cartContents}.`)
}

function total() {
getCart();
  var cartTotal = 0;

  for (var i = 0; i < cart.length; i++) {
    var cartItem = Object.keys(cart[i])[0];
    var cartPrice = cart[i][cartItem];
    cartTotal += cartPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
getCart();

for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart = [...cart.slice(0,i),...cart.slice(i+1)]
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
getCart()

  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
