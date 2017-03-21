var cart;
var cart = [];

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

var getCart = () => cart;

var addToCart = item => {
  var price = Math.floor(Math.random() * 100);
  getCart().push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

var viewCart = () => {

  var myCart = "In your cart, you have"

  if (cart.length > 0)
  {
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if (i != cart.length - 1)
        {
          myCart = myCart + " " + `${item} at $${cart[i][item]},`;
        }
        else {
            myCart = myCart + " " + `${item} at $${cart[i][item]}.`;
        }
      }
    }
console.log(myCart);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

// cart.reduce(function(response, item, index){
//   var name = Object.keys[0];
//   response += `${name} at $${item[name]}`
//   response += index != cart.length - 1 ? ',' : '.'
//   return response;
// },"In your cart you have: ")

function removeFromCart (item) {

console.log('TEST');

  for (var i = 0; i < cart.length; i++) {

    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }
  }
console.log('That item is not in your cart.');
}

var placeOrder = cardNumber => {

  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

}
