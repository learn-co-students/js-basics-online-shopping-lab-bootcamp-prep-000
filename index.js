var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push(new Object({[item] : price}));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var string="In your cart, you have";
  var arr = [];
  if(cart.length == 0)console.log("Your shopping cart is empty.");
  else {
    for(let i = 0; i < cart.length; i++){
      for (var item in cart[i]) {
        arr.push(` ${item} at $${cart[i][item]}`);
      }
    }
    console.log(string.concat(arr.join(',') , '.'));
  }
}

function removeFromCart(item){
  var exist = false;
  for(let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      exist = true;
    }
  }
  if(!exist)console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber){
  if(cardNumber == undefined)console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    var i = cart.length;
    while(i-- > 0){
      cart.shift();
    }
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
