var cart = [];

function setCart(newCart) {
  cart = newCart;
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
};

function getCart() {
  console.log(cart);
  return cart;
};

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemPriceHash = {};
  itemPriceHash[item] = price;
  cart.push(itemPriceHash);
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    console.log(`In your cart, you have${formatList(cart)}.`)
  };
};

function formatList(array) {
  let formatedArray = [];

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      formatedArray.push(` ${item} at $${cart[i][item]}`)
    };
  };

  return formatedArray;
};

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        cart.splice(i, 1);
        return cart;
      }
    };
  };
  console.log("That item is not in your cart.")
};

function placeOrder(creditNumber) {
  if (creditNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else if (creditNumber && creditNumber > -1) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditNumber}.`);
    cart = [];
  };
};
