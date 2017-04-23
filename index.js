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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random(0,100))
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var pp = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  else {
      for (var i = 0; i < cart.length; i++) {
        var item = Object.keys(cart[i]);
        var price = cart[i][item];
        pp.push(`${item} at $${price}`); // naming pp = potential purchase, ie, given item at given price & adding the following phrase as-is
        }
        console.log(`In your cart, you have ${pp.join(', ')}.`)
        return;
  }
}


function removeFromCart(item){
  var check = []
  for(var i in cart) {
  if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)}
      else {
        check.push(item);
      }}
  if(cart.length == check.length){
    console.log("That item is not in your cart.")
    }
}

function placeOrder(ccn) {
  if (ccn === undefined) {
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccn}.`)
    cart = [];
  }
}
