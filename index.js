var cart;

var getCart = () => cart;
var setCart = (newCart) => cart = newCart;

setCart([]);

var addToCart = (name) => {
  var price = Math.floor(Math.random() * 100);
  cart.push({[name]: price});
  console.log(name + ' has been added to your cart.');
  return cart;
};

var removeFromCart = (toRemove) => {
  var indexToRemove = -1;
  for (var i = 0; i < cart.length; i++) {
    var [name, price] = deconstructItem(cart[i]);
    if (name === toRemove) {
      indexToRemove = i;
      break;
    }
  }

  if (indexToRemove > -1) {
    cart.splice(indexToRemove, 1);
  }
  else {
    console.log('That item is not in your cart.');
  }

  return cart;
};

var viewCart = () => {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var items = cart.map(item => {
      var [name, price] = deconstructItem(item);
      return `${name} at $${price}`;
    });
    console.log(`In your cart, you have ${items.join(', ')}.`);
  }
};

var placeOrder = (ccNumber) => {
  if (!ccNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);
  setCart([]);
};

// assumes item = { "name": price }, returning [name, price]
var deconstructItem = (item) => {
  var name = Object.keys(item)[0];
  var price = item[name];
  return [name, price];
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
