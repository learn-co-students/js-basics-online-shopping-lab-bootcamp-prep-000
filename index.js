var cart;

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

function getCart(){
  return cart;
}

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
 if (!cart.length) {
    console.log('Your shopping cart is empty.')
  } else {
    var cartString = [];
    for (let i = 0, l = cart.length; i < l; i++){
      for (var item in cart[i]){
        cartString.push(`${item} at $${cart[i][item]}`)
      }
    }
    console.log(`In your cart, you have ${cartString.join(', ')}.`)
  }
}

function removeFromCart(item){
  var matches = 0;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      matches += 1;
      return cart;
    }
  }
  if (matches === 0){
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber){
  if (!cardNumber){
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = new Array();
}
