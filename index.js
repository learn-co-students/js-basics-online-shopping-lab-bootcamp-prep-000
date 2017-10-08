var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign( {}, {[item]: Math.floor(Math.random()*100)} ));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  //create base message
  var message = 'In your cart, you have ';

  // If cart is empty display that message
  if(cart.length === 0){
    message = 'Your shopping cart is empty.';
  }

  //If its not empty begin process
  else {

    //for loop to go through entire array
    for (let i = 0; i < cart.length; i++) {

      var price = Object.values(cart[i]);

      //If there is only 1 item proform this
      if(cart.length === 1){
        message += `${Object.keys(cart[i])} at ${ price }.`;
      }
      else if(i === cart.length-1){
        message += `and ${ Object.keys(cart[i]) } is priced at $${ Object.values(cart[i]) }.`;
      }
      else if(i === 0){
        message += `${ Object.keys(cart[i]) } is priced at $${ Object.values(cart[i]) }, `;
      }
      else{
        message += `and ${ Object.keys(cart[i]) } is priced at $${ Object.values(cart[i]) }, `;
      }

    }
  }

  console.log(message);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
