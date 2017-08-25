var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var randomize = Math.random() * 100 + 1;
  var itemPrice = Math.floor(randomize);
  var itemObject = { [item]: itemPrice }
  cart.push(itemObject);
  console.log( `${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(0 === cart.length) {

      console.log('Your shopping cart is empty.');

    } else if(1 === cart.length) {

        var key1 = Object.keys(cart[0]);
        var value1 = cart[0][key1];

        console.log(`In your cart, you have ${key1} at $${value1}.`);

      } else if(2 === cart.length) {

          var key2 = Object.keys(cart[0]);
          var value2 = cart[0][key2];
          var key3 = Object.keys(cart[1]);
          var value3 = cart[1][key3];

          console.log(`In your cart, you have ${key2} at $${value2} and ${key3} at $${value3}.`);

        } else if(3 === cart.length) {

          var key4 = Object.keys(cart[0]);
          var value4 = cart[0][key4];
          var key5 = Object.keys(cart[1]);
          var value5 = cart[1][key5];
          var key6 = Object.keys(cart[2]);
          var value6 = cart[2][key6];

          console.log(`In your cart, you have ${key4} at $${value4}, ${key5} at $${value5}, and ${key6} at $${value6}.`);

        } else if(4 === cart.length) {

          var key7 = Object.keys(cart[0]);
          var value7 = cart[0][key7];
          var key8 = Object.keys(cart[1]);
          var value8 = cart[1][key8];
          var key9 = Object.keys(cart[2]);
          var value9 = cart[2][key9];
          var key10 = Object.keys(cart[3]);
          var value10 = cart[3][key10];

          console.log(`In your cart, you have ${key7} at $${value7}, ${key8} at $${value8}, ${key9} at $${value9}, and ${key10} at $${value10}.`);

        }
}

function total() {
  var totalAmount = 0;

  for (var i = 0; i < cart.length; i++) {
    var itemN = Object.keys(cart[i]);
    var itemPr = cart[i][itemN];

    totalAmount = totalAmount + itemPr;
  }
  return totalAmount;
}

function removeFromCart(item) {
    for(var i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
    }
    if(!cart.hasOwnProperty(item)) {
      console.log('That item is not in your cart.')
    }
}


function placeOrder(cardNumber) {
 if(!cardNumber) {
   console.log('Sorry, we don\'t have a credit card on file for you.')
 } else {
   if(cardNumber) {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
    cart = [];
  }



}
