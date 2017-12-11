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
 var price = Math.floor((Math.random() * 100) + 1);
 var cart = getCart();
 console.log(`${item} has been added to your cart.`);
 return setCart([...cart, { [item]: price}]);
}

function viewCart() {
  // write your code here
  var cart = getCart();
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var result = "In your cart, you have";
    var isMoreThanTwo = cart.length > 2;
    for (var i = 0; i < cart.length; i++) {
      var item = Object.entries(cart[i])[0];
      var name = item[0];
      var price = item[1];
      if (i === 0) {
        result += ` ${name} at $${price}`;
      } else if (i === cart.length - 1) {
        if (isMoreThanTwo) {
          result += ',';
        }
        result += ` and ${name} at $${price}`;
      } else {
        result += `, ${name} at $${price}`;
      }
    }
    console.log(result + '.');
  }
}

function total() {
  // write your code here
  var cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[0];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return setCart([...cart.slice(0, i), ...cart.slice(i+1)]);
    }
  }
  
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  setCart([]);
}
