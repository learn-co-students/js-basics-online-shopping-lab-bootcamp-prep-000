var cart = [];

var cartItem = new Object();

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  // var cartItem = new Object();
    cartItem[item] = Math.floor(Math.random()*100);
  cart[0] = cartItem;
  console.log(item + " has been added to your cart.");
  console.log(getCart());
  getCart();
};

function viewCart(){
  var itemNames = Object.keys(cartItem);
  if(cart.length < 1){
    console.log("Your shopping cart is empty.");
  } else {
    console.log("In your cart, you have");
    for (var itemNames in cartItem){
        console.log(`${itemNames} and ${cartItem[itemNames]}`);
    }
  }
}

/*
function removeFromCart(item){
  var itemNames = Object.keys(cartItem);
  for (var i = 0; i < itemNames.length; i++){
    if(itemNames[i] == item){
      delete cartItem[item] ;
      cart[0] = cartItem;
      return
    }
  }
  console.log("That item is not in your cart.");
}
*/

function removeFromCart(item){
  if(cartItem.hasOwnProperty(item)){
    delete cartItem[item] ;
    cart[0] = cartItem;
    return
  } else {
    console.log("That item is not in your cart.");
  }
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

function placeOrder(cardNumber){
  if(cardNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
}
