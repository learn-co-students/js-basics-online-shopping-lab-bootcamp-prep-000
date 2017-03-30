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
  return cart
}

function addToCart(item){
    cart.push ({[item] : Math.floor(Math.random()*100)});
    console.log (`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if (!cart.length){
    console.log ('Your shopping cart is empty.');
  } else {
    var items = [];
    for (let i=0; i < cart.length; i++){
      var obj = cart[i];
      var item = Object.keys(obj)[0];
      var price = obj[item]
      items.push(' ' + item + ' at $' + price)
    }
    console.log (`In your cart, you have${items}.`)
  }
}

/*function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
     cart.splice(i, 1);
     return cart
    } else {
        console.log( "That item is not in your cart.");
    }
  }
}*/

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    var obj = cart[i]
    if(obj.hasOwnProperty(item)) {
      cart.splice(i)
      return (cart);
    }
  }
    if(obj!==item){
    console.log("That item is not in your cart.")
    }
}

function placeOrder(creditCard){
  if (typeof creditCard === "number"){
    console.log (`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
  } else {
    console.log ("We don't have a credit card on file for you to place your order.");
  }
    cart = [];
}
