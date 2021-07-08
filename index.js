var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = { [item]: Math.floor(Math.random() * 101)};
 cart.push(object);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length > 0) {
    var firstItem = Object.keys(cart[0]);
    var firstPrice = cart[0][firstItem];
    if(cart.length > 1) {
      var secondItem = Object.keys(cart[1]);
      var secondPrice = cart[1][secondItem];
      if(cart.length > 2) {
        var array = [];
        var x = cart.length - 1;
        var lastItem = Object.keys(cart[x]);
        var lastPrice = cart[x][lastItem];
        for(var i = 0; i < x; i++) {
          var item = Object.keys(cart[i]);
          var price = cart[i][item];
          array.push(` ${item} at $${price}`);
        }
        console.log(`In your cart, you have${array}, and ${lastItem} at $${lastPrice}.`)
      } else {
        console.log(`In your cart, you have ${firstItem} at $${firstPrice} and ${secondItem} at $${secondPrice}.`);
      }
    } else {
      console.log(`In your cart, you have ${firstItem} at $${firstPrice}.`)
    }
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    totalPrice += price;
  }
  return totalPrice;
  console.log(totalPrice);
}

function removeFromCart(item) {
  // write your code here
  var i = 0;
  while (i < cart.length) {
    var object = cart[i];
    var x = console.log - 1;
    if(object.hasOwnProperty(item) === true) {
      cart.splice(i,1);
      return cart;
      break;
    } else {
      i++;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.pop();
  }
}
