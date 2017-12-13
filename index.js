var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  cart.push(new Object({[item]: itemPrice}));
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var myList = 'In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
      for (var list in cart[i]) {
        myList += `${list} at $${cart[i][list]}`;
          if(i === cart.length - 1) {
            myList += '.';
          } if (i === cart.length - 2 && cart.length > 2) {
            myList += ', and '
          } if (i === cart.length - 2 && cart.length <= 2) {
            myList += ' and '
          } if (i === cart.length - 3 || i === cart.length - (3 + (i + 1))) {
		        myList += ', '
		      }
       }
    }
    console.log(myList);
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var list in cart[i]) {
      totalPrice += cart[i][list];
    }
  }
  return totalPrice;
}

function removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if (itemInCart === false) {;
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
}
