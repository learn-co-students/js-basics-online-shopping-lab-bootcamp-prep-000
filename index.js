var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var key = item;
  var itemToCart = {};
  itemToCart[key] = Math.floor(Math.random() * 100) + 1;
  cart.push(itemToCart);
  console.log(`${key} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if (cart.length === 0) {
    console.log( 'Your shopping cart is empty.');
  } else if (cart.length === 1) {
    var key = Object.keys(cart[0])[0];
    var value = Object.values(cart[0])[0];
      console.log(`In your cart, you have ${key} at $${value}.`);
    }
    else if (cart.length === 2) {
      var string = "";


        var key = Object.keys(cart[0])[0];
        var value = Object.values(cart[0])[0];

        string = (`and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`);


    console.log(`In your cart, you have ${key} at $${value} ${string}`);


} else {
    var string = "";
    for (var i = 1; i < cart.length - 2; i++) {
      var key = Object.keys(cart[i])[0];
      var value = Object.values(cart[i])[0];

      string += (`${key} at $${value}, `);
}

//for (var i = cart.length -1; i < cart.length - 2; i++) {
//  var key = Object.keys(cart[i])[0];
//  var value = Object.values(cart[i])[0];

//  string += (`${key} at $${value}`);
//}

    var key = Object.keys(cart[0])[0];
    var value = Object.values(cart[0])[0];

    console.log(`In your cart, you have ${key} at $${value}, ${string}${Object.keys(cart[cart.length - 2])[0]} at $${Object.values(cart[cart.length - 2])[0]}, and ${Object.keys(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[0]}.`);



}
};


function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var value = Object.values(cart[i])[0];
    total += value;
  }
    return total;

}

function removeFromCart(item) {
  var getC = getCart()

   for(var i = 0; i < getC.length; i++){
   if(Object.keys(getC[i])[0] === item){
      getC.splice(i,1)
    }
   }

  if (getCart().length === getC.length)
     console.log("That item is not in your cart.")
   else {
     setCart(getC)
  }
   return getC
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
  return console.log("Sorry, we don't have a credit card on file for you.")
} else {

 console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
 cart = []
}
};
