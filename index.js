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

function getCart(){
  return cart;
}

function addToCart(item){

  var obj = {};

  Object.assign(obj, { [item]: Math.floor(Math.random()*100) + 1 });

  console.log(`${item} has been added to your cart.`);

  cart.push(obj);

  return cart;
}

function viewCart(){
  var str = "In your cart, you have ";
  if(cart.length < 1){
    console.log("Your shopping cart is empty.");
  } else {
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]) {
        str += `${item} at $${cart[i][item]}, `;
      }
    }
    str = str.slice(0, -2);
    str += "."
    console.log(str);
  }
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if(typeof cardNumber === "undefined"){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  return cart;
}
