var cart;
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var price in cart[i]) {
      t += cart[i][price]
    }
  }
  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random());
  var addToCart = {[item]: price};
  cart.push(addToCart);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  var printCart = [];
  for (var i = 0; i < cart.length; i++){
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];

       printCart.push(`${item} at \$${price}`);

  }
  console.log(`In your cart, you have ${printCart.join(', ')}.`)
}

function removeFromCart(item){
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0,i).concat(cart.slice(1+i));
    }
  }
  if(!itemInCart){
    console.log("That item is not in your cart.");
  }
  return cart;
}
/*Define a function `placeOrder` which accepts one argument, a credit card number.
If no argument is received, then the function should print out
`"We don't have a credit card on file for you to place your order."`.
    If there is a credit card on file, the function should print out
    `"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`.
    The function should empty the `cart` array..*/
function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);

    cart = [];
  }
}
