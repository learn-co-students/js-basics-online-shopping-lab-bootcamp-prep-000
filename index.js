var cart =[];


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

// test 1
function getCart(){
  return cart;
}

// test 2
function addToCart(item){
  // generate a random number from 0-100
  var price = Math.floor(Math.random() * 100);

  /* create the item/price pair as an object
   [item] must be in brackets otherwise the object key will be 'item' instead
   of the value that the variable item represents */
  var obj = {[item]: price};

  // push object to cart
  cart.push(obj);

  console.log(`${item} has been added to your cart.`);

  return cart;
}

// test 3
function viewCart(){

  // intialize variables
  var inCart = '';
  var price = 0;
  var items = '';
  var at = " at $";
  var comma = ", ";

  // check for items in the cart array
  if(cart.length > 0){

    for (var i = 0, l = cart.length; i < l; i++) {

      for(var keys in cart[i]){
        // convert price to a string for concatenation
        items = Object.keys(cart[i]);
        price = cart[i][keys];
        inCart += items + at + price + comma;
      }
    }

    // replace the last comma of inCart with a period
    inCart = inCart.substring(0, (inCart.length - 2));
    inCart += (".");

    // print the contents of the cart in the desired format
    console.log(`In your cart, you have ${inCart}`);

  // print cart is empty when no items are found in the cart
  }else{
    console.log("Your shopping cart is empty.");
  }

}

// test 4
function removeFromCart(item){
  var index = 0;

  for (var i = 0, l = cart.length; i < l; i++) {

    for(var items in cart[i]){

      // search for the item
      if(cart[i].hasOwnProperty(item)){

        // get the index of the item
        index = cart.indexOf(item);

        // remove the item object
        cart.splice(index, 1);
        return cart;
      }
    }
  }

  // if the function makes it this far, it means it hasn't found the item in
  // the cart
  console.log("That item is not in your cart.");
  return cart;
}


// test 5
function placeOrder(cardNumber){

  // run when cardNumber exists
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

    // empty the cart
    cart = [];

  // run when cardNumber doesn't exist
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}

function setCart(newCart) {
  cart = newCart;
}
