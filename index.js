var cart = [];

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() { // cart might look like [{pizza: 24}, {socks: 12}, {iPad: 75}]
  if(cart.length > 0) {
    var str = 'In your cart, you have ';
    var array = [];
    for (var i = 0; i < cart.length; i++) { // first iteration cart[i] is {pizza: 24}
      var item = Object.keys(cart[i]) // Object.keys(cart[i]) gives us ['pizza'] we access with [0] to get 'pizza' and set that to item
      var price = cart[i][item]// format is object[key]
      array.push(`${item} at $${price}`)
    }
    console.log(str + array.join(', ') + '.');
  }else{
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i);
      return cart;
    } 
  }
  console.log('That item is not in your cart.');
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order." );
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
