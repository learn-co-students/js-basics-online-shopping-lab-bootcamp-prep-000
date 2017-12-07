var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function genPrice() {
  var n;
  n = Math.floor(Math.random() * 100);
  return n;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
 cart.push({[item]: genPrice()});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    //stuff for 1 entry goes here. "In your cart, you have item1 at $n." (This part works.)
    var response
      for (var i=0; i < cart.length; i++) {
          var currentPair = cart[i]; // this gives us {chicken: 10}
          var currentItem = Object.keys(currentPair)[0]; // this gives us "chicken"
          var currentPrice = currentPair[currentItem]; // get the value
          response = `${currentItem} at $${currentPrice}`;
        }
    console.log(`In your cart, you have ${response}.`);
  } else if (cart.length === 2) {
    //stuff for 2 entries goes here. "In your cart, you have item1 at $x and item2 at $y." (This works.)
    var response_two = "In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + " and " + Object.keys(cart[1])[0] + " at $" + cart[1][Object.keys(cart[1])[0]]+ ".";
      
    console.log(response_two);
  } else {
    //stuff for 3+ entries goes here. "In your cart, you have item1 at $x, item2 at $y, item3 at $z, and item4 at $a." This passes.
    var lastList = Object.keys(cart[cart.length-1])[0] + " at $" + cart[cart.length-1][Object.keys(cart[cart.length-1])[0]];
    var firstList="";
    for (i = 0; i < cart.length-1; i++) {
    firstList +=  Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ", "
    }
    console.log("In your cart, you have " + firstList + "and " + lastList + ".");
  }
}

// total() passes.

function total() {
  var totalPrice = 0;
    for (var i=0; i < cart.length; i++) {
      var currentPair = cart[i]; // this gives us {chicken: 10}
      var currentItem = Object.keys(currentPair)[0]; // this gives us "chicken"
      var currentPrice = currentPair[currentItem]; // get the value
      totalPrice = totalPrice + currentPrice;
    }
    return totalPrice;
  }

// removeFromCart() passes.

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
console.log("That item is not in your cart.");
}

// 5. The `placeOrder()` function accepts one argument, a credit card number.
//     + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
//     + If a card number is received, the function should print out `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`). Then, it should empty the `cart` array.
//     Code goes here.

function placeOrder(cardNumber) {
var totalNum = total();
if (Boolean(cardNumber)) {
  console.log(`Your total cost is $${totalNum}, which will be charged to the card ${cardNumber}.`);
  cart=[];
  return;
  }
  console.log("Sorry, we don't have a credit card on file for you.");
}