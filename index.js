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
  return cart
}



function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var add = {};
  add[item]=price;
  cart.push(add);
  console.log(`${item} has been added to your cart.`);
  return cart
}


function viewCart() {
  if(cart.length>0) {
    var inCart = [];
    for(var i = 0; i<cart.length; i++)
       {
        var name = Object.keys(cart[i]);
          inCart.push( ` ${name[0]} at $${cart[i][name]}`);
        }
        var readCart = inCart.join(',');
      console.log(`In your cart, you have` + readCart + '.')
    }
  else{
      console.log("Your shopping cart is empty.")
    }
}


function removeFromCart(item) {
  for (var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    } }
  console.log("That item is not in your cart.")
  }



function placeOrder(cardNumber){
  if(typeof cardNumber === 'number') {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart=[];
    return cart
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
