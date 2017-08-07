var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 cart.push(Object.assign({[item]: Math.floor((Math.random() * 100) + 1)}))
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var theCart = [];

  if(cart.length === 0){
    console.log ("Your shopping cart is empty.");
  }else if(cart.length >=3 ){
    var threePlusItemCart = [];
    var lastItemInCart = [];
    for(var i = 0; i < cart.length; i++){
      if(i === (cart.length - 1)){
        var lastitem = Object.keys(cart[i]);
        var lastprice = cart[i][lastitem];
        lastItemInCart.push(` and ${lastitem} at $${lastprice}.`)

      }else{
        var item = Object.keys(cart[i]);
        var price = cart[i][item];
        threePlusItemCart.push(` ${item} at $${price}`);

      }
    }
    console.log("In your cart, you have" +threePlusItemCart.concat(lastItemInCart));

  }else if(cart.length === 2){
    var twoItemCart = [];
    for(var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i]);
      var price = cart[i][item];
      twoItemCart.push(`${item} at $${price}`)
    }
    console.log(`In your cart, you have ${twoItemCart[0]} and ${twoItemCart[1]}.`);
  }else{
    for(var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i]);
      var price = cart[i][item];
      console.log(`In your cart, you have ${item} at $${price}.`);
    }
  }
}

function total() {
  var yourTotal = 0;
  for(var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i]);
    yourTotal +=  cart[i][item];

  }
  return yourTotal;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item) === true){
          cart.splice(i, 1);
          return cart;
        }
      }
      console.log('That item is not in your cart.');
      return cart;
    }





function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0);
    return cart;
  }
}
