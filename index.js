var cart = [];

function getCart() {
  return cart;
};

function setCart(newCart) {
  cart = newCart;
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart() {
  var itemList = [];
  if(cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    for(var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i];
      var itemName = Object.keys(itemAndPrice)
      var itemCost = itemAndPrice[itemName]
      itemList.push(`${itemName} at $${itemCost}`);
      console.log(`In your cart, you have ${itemList.join(", ")}.`)
    }
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  };

  return t
};

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      getCart();
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(creditCardNumber) {
  if(creditCardNumber == undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    var newCart = []
    setCart(newCart);
    getCart()
  }
}
