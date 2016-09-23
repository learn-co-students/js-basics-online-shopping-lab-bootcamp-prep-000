var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var pair = {
    [item]: price
  };
  cart.push(pair);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length > 0){
    var newArray = [];
      for(var i = 0; i < cart.length; i++){
        for (var itemName in cart[i]) {
          newArray.push(`${itemName} at $${cart[i][itemName]}`);}}
            console.log("In your cart, you have " + newArray.join(", ") + ".");
  } else {
  console.log("Your shopping cart is empty.");
  }
}


function removeFromCart(item){
  var counter = 0;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true) {
      counter ++;
      delete cart[i];
      cart = [];
      }
    }

if (counter === 0) {console.log("That item is not in your cart.");}

return cart;}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
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
