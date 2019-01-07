var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = Object.assign({},{[item]: (Math.floor(Math.random() * 100)) + 1});
  cart.push(newObj);
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var ans = 'In your cart, you have ';
    var counter = 0;
    var index = cart.length - counter;
    var morethantwo = false;
    while(counter != cart.length) {
    for (var i in cart[counter]) {
      ans = ans + i + ' at $' + cart[counter][i];
      if (index > 2) {
        ans = ans + ', ';
        morethantwo = true;
      }
      if (index == 2) {
        if (morethantwo) {
          ans = ans + ',';
        }
        ans = ans + ' and ';
      }
      if (index == 1) {
        ans = ans + '.';
      }
      counter++;
      index = cart.length - counter;
      }
    }
    console.log(ans);
  }
}

function total() {
  // Returns total cost of cart
  var ans = 0;
  var counter = 0;
  while (counter != cart.length) {
    for (var i in cart[counter]) {
      ans = ans + cart[counter][i];
      counter++;
    }
  }
  return ans;
}

  function removeFromCart(item) {
    // write your code here
    var index = -1;
    var counter = 0;
    while (counter != cart.length) {
      for (var i in cart[counter]) {
        if (i == item) {
          index = counter;
          break;
        }
      }
      counter++;
    }
    if (index == -1) {
      console.log('That item is not in your cart.')
    }
    else {
      cart.splice(index,1);
    }
    return cart;
  }

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + '.')
    cart = [];
  }
}
