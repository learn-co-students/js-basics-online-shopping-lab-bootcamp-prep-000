var cart = [];
function setCart(newCart) {
  cart = newCart;
}
function getCart() {
  return cart;
}

function addToCart(item) {
  var toAdd = {}
  var price = Math.floor(Math.random() * 100);
  function add() {
  toAdd[item] = price;
  cart.push(toAdd);
  console.log(item +" has been added to your cart.");
  }
add()
return cart;
}

function viewCart() {
  var string = "In your cart, you have";
  cart.forEach(function(currentValue, index, arr) {
    for(var i in currentValue) {
    if(index >= 1) {
    string += ', ' + i + ' at $' + currentValue[i];
    }
    else {
      string += ' ' + i + ' at $' + currentValue[i];
    }
  }
  });

  console.log(string + '.');
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function removeFromCart(item) {
  var found = false
  cart.forEach(function(currentValue, index, array){
    for(var i in currentValue){
    if(i == item){
      cart.splice(i,1);
      found = true;
      }
    }
  });
  if(found === false) {
      console.log('That item is not in your cart.');
    }
  return cart
}
function placeOrder(cc) {
  var cardNumber = cc;
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
