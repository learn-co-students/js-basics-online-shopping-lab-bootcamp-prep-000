var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartObj = {}
  cartObj[item] = Math.floor(Math.random() * 10)
  cart.push(cartObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartStr = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (var i = 0; i < cart.length; i++) {
      var keys = Object.keys(cart[i]);
      for (var k = 0; k < keys.length; k++) {
        cartStr += `${keys[k]} at `;
      }
      var values = Object.values(cart[i]);
      for (var j = 0; j < values.length; j++) {
        if (cart.length === 1) {
          cartStr += `$${values[j]}.`;
        } else if (cart.length === 2) {
          cartStr += `$${values[j]} and `;
        } else if (cart.length >= 3) {
            cartStr += `$${values[j]}, `;
        }
      }
    }
  }
  if (cart.length === 1) {
    console.log(cartStr);
  } else if (cart.length === 2) {
    console.log(cartStr.slice(0, -5) + '.');
  } else if (cart.length >= 3) {
    var splitCart = cartStr.split(',');
    console.log(splitCart.slice(0, -3) + ',' + splitCart.slice(-3, -2) + ', and' + splitCart.slice(-2, -1) + '.');
  }
}

function total (){
  var total = 0;

  for(var i = 0; i < cart.length; i++){
    var prices = Object.values(cart[i]);
    for(var j = 0; j < prices.length; j++){
      total += prices[j];
    }
  }
  return total;
}

function removeFromCart(item){
  var ogCart = cart;
  var inCart = false;

  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item) === true){
      if(cart[i] === cart[0]){
        cart = cart.slice(1);
        inCart = true;
      } else if (cart[i] === cart[cart.length - 1]){
        cart = cart.slice(0, -1);
        inCart = true;
      } else {
        cart = cart.slice(0, i).concat(cart.slice(i+1));
        inCart = true;
      }
    }
  } if(!inCart){
  console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
