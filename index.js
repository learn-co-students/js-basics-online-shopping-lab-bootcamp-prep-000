var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  //takes item user wants to purchase

  //set price by generating number
  var  price = Math.floor(Math.random() * 101)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)

  return cart;
}

//should print out item/price pairs of items in cart
//If nothing should print out cart is empty
function viewCart() {
  //empty array
  var properties = []

  //if cart has items in it
  if (cart.length > 0) {
    //loop through items
    for (var i = 0; i < cart.length; i++) {
      //new cartObject is items in cart
      var cartObject = cart[i];
      //loop through items in cartObject
      for (var item in cartObject) {
        //define items and prices for new array.
        var item = item
        var price = cartObject[item]
        //push values into properties
        properties.push(' '+item+' at $'+price);

      }

    }
      //write out list of properties
      console.log(`In your cart, you have${properties}.`);
  }
    else {
      //write that cart is empty
      console.log("Your shopping cart is empty.");
    }

}

function removeFromCart(item) {

if (cart.length > 0) {
  for (var i = 0; i < cart.length; i++) {
    var cartObject = cart[i];

    for (var item in cartObject) {
//if new cart has item
      if (cartObject.hasOwnProperty(item)) {
        //delete item from cart
        cart.splice(i,1);

      }
      else {
      console.log('That item is not in your cart.');
      }
    }
  }
}
 else {console.log('That item is not in your cart.')}
}

function placeOrder(creditCard){
  //if no card, write out message
if(creditCard === undefined){
   console.log("We don't have a credit card on file for you to place your order.");
}else{
  var totalOrder = total();
  console.log(`Your total cost is $${totalOrder}, which will be charged to the card ${creditCard}.`)
}
cart = [];

}


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
