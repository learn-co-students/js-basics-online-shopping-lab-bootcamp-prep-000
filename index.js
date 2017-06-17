var cart = [];

function getCart(){
  console.log(cart);
  return cart;
};

function addToCart(item){
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var current = [];
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
    var prop = Object.keys(cart[i]);
    current.push(prop + " at $" + cart[i][prop]);
    }
    console.log("In your cart, you have " + current.join(", ") + ".");
    }
    else  {
      console.log("Your shopping cart is empty.")
    }
  }

  function removeFromCart(item){
      var origSize = cart.length;
      for(var i = 0; i < origSize; i++){
      if (item == Object.keys(cart[i])){
        cart.splice(i, 1);
      }
    }
    if(cart.length == origSize){
      console.log("That item is not in your cart.");
    }
  }

  function placeOrder(cc){
  	if (cc == undefined){
  console.log("We don't have a credit card on file for you to place your order.")
      }
  	else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
      }
      cart = [];
  }

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
