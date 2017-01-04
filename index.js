var cart=[];
// define global variable, variables deined w = operator, initialize an empty array
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
//total accepts no arguments. It iterates over
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

/*This function should automatically set a price for this item by generating a random number between 0 and 100.
(Hint: Math.random() generates a random number in 0, 1; Math.floor() rounds a number down to the nearest integer.)
//This function should add the item and the price as an object ({item: price}) to the cart array.
This function should print out to the console <item> has been added to your cart. and return the cart.
function addToCart(item) */
function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({ [item]: itemPrice })
  console.log("<item> has been added to your cart.");
  return cart
}
//This function should loop over every item in cart to print out
//"In your cart, you have [item and price pairs]."
//If there isn't anything in your cart, the function should print out
function viewCart( ){
  //declare a var and set it's value equal to something
      if (cart.length === 0) {
        //do something
          console.log("Your shopping cart is empty.");
        }
 //compare conditional statements here
}
