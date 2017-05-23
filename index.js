var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var item_price = Math.floor(Math.random()*100);
  cart.push({ [item]:item_price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length>0) {
    var storing_array = [];
    for (var i=0; i<cart.length; i++){
        var object = cart[i];
        var key = Object.keys(object);
        var value = object[key];
        storing_array.push(` ${key} at $${value}`);
      }
      console.log(`In your cart, you have${storing_array}.`);
    }
  else {
    console.log("Your shopping cart is empty.");
  }
}

/*
The below code also compiled, but no need for a loop within the object itself, as each object has 1 single key
and value!

function viewCart(){
  if (cart.length>0) {
    var storing_array = [];
    for (var i=0; i<cart.length; i++){
      for (var key in cart[i]) {
        storing_array.push(`${key} at $${cart[i][key]} `);
      }
    }
  console.log(`In your cart you have ${storing_array} `);
  }
  else {
    console.log("Your shopping cart is empty.");
  }
}

*/

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++ ) {
    var object = cart[i];
    if (object.hasOwnProperty(item)){
    //var key = Object.keys(object);
    //if (item == key) {
      cart.splice(i,1);
      var deleted = 1;
    }
    }
  if (deleted != 1) {
    console.log("That item is not in your cart.");
  }
}

function setCart(newCart) {
  cart = newCart;
}

function placeOrder(cc_number){
  if (cc_number == null) {
  console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cc_number}.`);
  cart = [];
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
