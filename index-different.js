var cart = [];

function setCart(newCart) {
  cart = newCart;
};

var getCart = function(){
  return cart;
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

function addToCart(item){
cart.push({ [item] : Math.floor(Math.random()*100) });
console.log(item + " has been added to your cart.");
return cart;
};

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else {
    for (var i=0; i<cart.length; i++){
      for (var key in cart[i]){
        console.log(`In your cart, you have ${key} at $${cart[i][key]}.`);
      }
    }
  }
}

function removeFromCart (item){
  var foundIt = false;

  for (var i=0; i<cart.length; i++){
    for (var key in cart[i]){
      if (key === item){
        foundIt = true;
        cart.splice(i,1);
      }
    }
  };
  if (!foundIt){
    console.log(`That item is not in your cart.`)
  }
  else {
    return cart;
  }
};

function placeOrder (cardNumber){
  if(typeof cardNumber === "number"){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  cart = [];
}
