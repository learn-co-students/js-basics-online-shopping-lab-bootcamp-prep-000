var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  //generate random price
  var price = Math.floor(Math.random() * 100) + 1;

  //add item to the cart with the random price
  //create object
  cart.push({ [item]: price });

  //log the added item
  console.log(`${item} has been added to your cart.`);

  //return updated cart
  return cart;
};

function viewCart(){
  //if the shopping cart is empty, print that its empty
  if(!cart.length){
    console.log("Your shopping cart is empty.")
  }

  var prices = [];

  for(var i = 0; i < cart.length; i++){
    var itemPrices = cart[i];
    var item = Object.keys(itemPrices)[0];
    var price = itemPrices[item];

    prices.push(`${item} at \$${price}`);
  }

  console.log(`In your cart, you have ${prices.join(', ')}.`)
};

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      total += cart[i][item]
    }
  }

  return total
};

function removeFromCart(item) {
  var itemInCart = false;
  if(!itemInCart) {
    console.log("That item is not in your cart.");
  }
  for (var i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i);
    }
  }
};

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log('We don\'t have a credit card on file for you to place your order.');
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);

  cart = [];
};
