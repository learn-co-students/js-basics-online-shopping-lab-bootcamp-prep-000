var cart =[];

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

function getCart() {
  return cart;
}

function addToCart(item_to_add) {

  cart.push({[item_to_add]: Math.floor(Math.random()*100)});
  console.log(item_to_add + ' has been added to your cart.');
  return getCart();
}


function viewCart() {
  var response;

  if (cart.length > 0) {

    response = 'In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
        console.log();
      response += Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])] + ', ';
    };
      response = response.substring(0, response.length - 2) + '.';
  } else {
    response = 'Your shopping cart is empty.';
  }
  console.log(response);
}

function removeFromCart(item_to_remove) {

for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item_to_remove)) {
    cart.splice(i, 1);
    return cart;
  };
}

console.log('That item is not in your cart.');

return cart;

}

function placeOrder(cc_number) {
  if (cc_number) {
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
      total += cart[i][Object.keys(cart[i])];
    }

    console.log('Your total cost is $' + total + ', which will be charged to the card ' + cc_number + '.');

    cart = [];

  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  };



}
