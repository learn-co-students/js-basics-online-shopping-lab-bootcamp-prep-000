var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName  = `${item}`;
    var itemPrice = Math.floor(Math.random() * 100 + 1);
      var d = {[itemName] : itemPrice};
  cart.push(d);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
      console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    var object = cart[0];                 //object = cart index 0 etc
    console.log(`In your cart, you have ${Object.getOwnPropertyNames(object)} at $${Object.values(object)}.` );
  } else if (cart.length === 2){      //2 items in cart do the following
        var a = [];
      for (let i=0; i < cart.length - 1; i++) { //for index 0 and up
          var object = cart[i];                 //object = cart index 0 etc
          a.push(` ${Object.getOwnPropertyNames(object)} at $${Object.values(object)}` );
          }
          var object = cart[cart.length - 1];
          var b = `${Object.getOwnPropertyNames(object)} at $${Object.values(object)}.`;
          console.log (`In your cart, you have${a.toString()} and ${b}`);
    } else {                         //3 items in cart do the following (because of oxford commas)
          var a = [];
        for (let i=0; i < cart.length - 1; i++) { //for index 0 and up
            var object = cart[i];                 //object = cart index 0 etc
            a.push(` ${Object.getOwnPropertyNames(object)} at $${Object.values(object)}` );
            }
            var object = cart[cart.length - 1];
            var b = `${Object.getOwnPropertyNames(object)} at $${Object.values(object)}.`;
            console.log (`In your cart, you have${a.toString()}, and ${b}`);
          }
}

function total() {
    var a = [];
    for (let i=0; i < cart.length; i++) { //for index 0 and up
      a.push(Object.values(cart[i]));   //push into a object values in carty array index i
    }
      var sum = a.reduce(add, 0);
      function add(c, d) {
          return c + d;
      }
        return sum;
}

function removeFromCart(item) {

  for (let i=0; i < cart.length - 1; i++) { //for index 0 and up
      var object = cart[i];                 //object = cart index 0
          Object.getOwnPropertyNames(object);

          if (object.hasOwnProperty(item) == false ) {          //if cart has object property then log item isn't in cart
              console.log('That item is not in your cart.')
          } else {
                delete cart[item]
                  return cart
                  }
  }
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber) === true) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
