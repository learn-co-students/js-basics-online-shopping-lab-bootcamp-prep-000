var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 99) +1;
  var cartItem = {[item]: price};
  cart.push(cartItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  }
  else if(cart.length === 1){
    var item = Object.keys(cart[0])[0];
    var price = cart[0][Object.keys(cart[0])[0]];
    console.log(`In your cart, you have ${item} at \$${price}.`);
  }
  else if(cart.length === 2){
    var item1 = Object.keys(cart[0])[0];
    var item2 = Object.keys(cart[1])[0];
    var price1 = cart[0][Object.keys(cart[0])[0]];
    var price2 = cart[1][Object.keys(cart[1])[0]];
    console.log(`In your cart, you have ${item1} at \$${price1} and ${item2} at \$${price2}.`);
  }
  else if(cart.length >= 3){
    var str = 'In your cart, you have ';
    for(var i = 0; i < cart.length; i++){
      if(i < cart.length -1){
        var item = Object.keys(cart[i])[0];
        var price = cart[i][Object.keys(cart[i])[0]];
        str = str.concat(`${item} at \$${price}, `)
      }
      else if(i = cart.length - 1){
        var item = Object.keys(cart[i])[0];
        var price = cart[i][Object.keys(cart[i])[0]];
        str = str.concat(`and ${item} at \$${price}.`);
      }
    }
    console.log(str);
  }
}


function total() {
  var sum = 0;
  for(var i in cart){
    var price = cart[i][Object.keys(cart[i])[0]];
    sum = sum + price;
  }
  return sum;
}

function removeFromCart(item) {
  var length = cart.length;
  for(var i in cart){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
    }
  }
  if(length === cart.length){
    console.log('That item is not in your cart.');
    return cart
  }
  else if(length !== cart.length){
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else{
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    return cart;
  }
}
