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
 var new_obj = new Object();
 new_obj[item] = Math.floor(Math.random()*101);
 cart.push(new_obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code her
  if (cart.length > 0){
    var arr = [];
    for (var i = 0; i < cart.length; i++) {
      for (var name in cart[i]) {
        arr.push(`${name} at $${cart[i][name]}`);
      }
    }

    switch (arr.length){
      case 1:
        var ans = arr[0]
        break;
      case 2:
        console.log("case2");
        var ans = arr.join(' and ');
        console.log(ans);
        break;
      default:
        arr[cart.length - 1] = "and ".concat(arr[cart.length - 1]);
        var ans = arr.join(', ');
    }

    return console.log(`In your cart, you have ${ans}.`);
  }
  else {
    return console.log("Your shopping cart is empty.");
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    total += parseInt(cart[i][item]);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var l = cart.length;
  for (var i = 0; i < l; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
      return cart;
    }
  }
  console.log("That item is not in your cart.")
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }
}


addToCart("mango");
addToCart("nuts");
viewCart();
