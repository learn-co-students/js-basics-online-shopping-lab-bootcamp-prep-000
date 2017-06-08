var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var a = Math.floor((Math.random() * 100));
  var b = new Object(item, a);
  cart.push(b)
  console.log(item + " has been added to your cart.");
  return(cart);
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else{
    for (var i = 0; i < cart.length; i++){
      var cartObjects = Object.keys(cart[i]);
      var cartPrice = cart[i][cartObjects];
      console.log("In your cart, you have " + cartObjects + " at " + cartPrice + ".");
    }
  }
}

function removeFromCart(itemName){
  for (var i in cart){
    var ownProp = cart[i].hasOwnProperty(itemName);
    if(ownProp){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}
