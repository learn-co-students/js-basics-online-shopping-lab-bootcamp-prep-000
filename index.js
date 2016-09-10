var cart =[];

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
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

var itemNames = Object.keys(cart);

function viewCart() {
  var list = 'In your cart, you have ';
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    for(var i = 0, l = cart.length; i < l; i++) {
      for(var item in cart[i]) {
        list += item + ' at' + ' $' + cart[i][item] + ', ';
      }
    }
    list = list.replace(/,$/,"") + ".";
    console.log(list);
  }
}

function removeFromCart(removeItem) {
  var c = getCart();
  if(hasItem(getCart(), removeItem)) {
    for(let i = 0, l = c.length; i < l; i++) {
      console.log(c[i]);
      var index = getCart().indexOf(c[i]);
      getCart().splice(index, 1);
      console.log(getCart());
      return getCart();
    }
  }
  else {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

function hasItem(c, item) {
  for (let i = 0, l = c.length; i < l; i++) {
    if (c[i].hasOwnProperty(item)) {
      return true
    }
  }

  return false
}
