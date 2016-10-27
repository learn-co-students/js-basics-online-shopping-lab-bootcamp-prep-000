var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart (item) {
 var thing = {
   [item] : Math.floor(Math.random()*100)
 }
 cart.push(thing);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart () {
var string = 'In your cart, you have ';
  if (cart.length > 0) {
    for (var i=0; i<cart.length-1; i++) {
//     string += Object.keys(cart[i]).toString() + " at " + Object.values(cart[i]).toString();
      string += Object.keys(cart[i]).toString() + " at $" + cart[i][Object.keys(cart[i]).toString()] + ", ";
    }
    string += Object.keys(cart[cart.length-1]).toString() + " at $" + cart[cart.length-1][Object.keys(cart[cart.length-1]).toString()] + ".";
    console.log(string);
  }
  else {
    console.log('Your shopping cart is empty.');
  }

}

function removeFromCart (item) {
  for (var i=0; i<cart.length; i++) {
  if (cart[i].hasOwnProperty(item)){
    var newCart = [];
    for (var i=0; i<cart.length; i++) {
      if (item != cart[i].toString) {
        var newthing = {
          [item] : cart[i][Object.keys(cart[i]).toString()]
        }
        newCart.push(newthing);
      }
    }
    setCart(newCart)
    return cart;
  }
  else {
    console.log ("That item is not in your cart.")
  }
}
}

function placeOrder(number) {

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
