var cart = [ ];

var itemPrice = Math.floor(Math.random() * 100) + 1;


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {

  var itemPrice = Math.floor(Math.random() * 100) + 1;

  var newObject = { [item] : itemPrice};
  cart.push(newObject)

  console.log(`${item} has been added to your cart.`)
 return cart;
}



function viewCart() {


  if (cart.length === 0) {

      console.log("Your shopping cart is empty.")

  } else if (cart.length === 1 ) {

      console.log("In your cart, you have " + Object.keys(cart[0]) +
      " at $" + Object.values(cart[0]) + "." )

  } else if (cart.length === 2 ) {

      for (var i = 0; i < cart.length; i++) {

      console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" +
      Object.values(cart[0]) + " and " + Object.keys(cart[1]) + " at $" +
      Object.values(cart[1]) + "." )

    }

  } else {

    var items = [];

    for (var i = 0; i < cart.length; i++) {

      items.push( Object.keys(cart[i]) + " at $"  + Object.values(cart[i]) )

     }

    var pop = items.pop()

    console.log("In your cart, you have " + items.join(", ") + ", and " + pop + "." );

    items.push(pop);

    return items;

   }
}


function total() {

  var newPrice = [];

  for (var i = 0; i < Object.keys(cart).length; i++) {
	   newPrice.push(  Object.values(cart[i])  )
	}

	var flattenPrice = [].concat.apply([], newPrice);

	var reducer = (accumulator, currentValue) => accumulator + currentValue;

  return ( flattenPrice.reduce(reducer) );

}


function removeFromCart(item) {

  var keys = "";
  var key = "";

  for (var i = 0; i < cart.length; i++) {

    keys = Object.keys(cart[i]);
    key = keys[0];

     if (key === item) {

       cart.splice(i, 1);
       return cart;

     }
  }
   console.log("That item is not in your cart.");
 }


function placeOrder(cardNumber) {

  if ( !cardNumber ) {

    console.log("Sorry, we don't have a credit card on file for you.")

  } else {

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = [];

  }
}
