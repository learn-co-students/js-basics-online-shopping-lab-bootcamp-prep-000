var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random() * 101));

  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
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


function viewCart(){
  if (cart.length == 0){
    console.log("Your shopping cart is empty.");
  } else {
    var cartStatement = "In your cart, you have"
    for ( var i = 0; i < cart.length; i++){
      for ( var item in cart[i] ){
        if ( i == (cart.length - 1)){
        cartStatement += ` ${item} at $${cart[i][item]}.`
      } else {
        cartStatement += ` ${item} at $${cart[i][item]},`;
        }
      }
    }
    console.log(cartStatement);
  }
}

function removeFromCart(item){
  var originalCartLength = cart.length;
  for (var i = 0; i < cart.length; i++){
    for (var itemName in cart[i] ){
      if (item == itemName) {
        cart.splice(cart[i],1);
        break;
      }
    }
  }
  var newCartLength = cart.length;
  if (newCartLength == originalCartLength) {
    console.log("That item is not in your cart.");
  }
}


function placeOrder(creditCardNumber){
  if (creditCardNumber == null ){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart.splice(0, cart.length);
  }
}
