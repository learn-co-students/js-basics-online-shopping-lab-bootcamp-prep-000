var cart = [ ];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

setCart();

function addToCart(item) {

  var price = Math.floor(Math.random() * 100) + 1;

  cart.push({[item[i]] : price});

  console.log(`${item[i]} has been added to your cart.`)
  return cart;

}


function viewCart() {

   if (Object.keys(cart).length === 0) {

      console.log("Your shopping cart is empty.")

    } else if (Object.keys(cart).length === 1 ) {

      console.log(`In your cart, you have ${Object.keys(cart)[0]}
      at $${Object.values(cart)[0]}. `)

      return (`In your cart, you have ${Object.keys(cart)[0]}
      at $${Object.values(cart)[0]}. `)

    } else if (Object.keys(cart).length === 2 ) {

      console.log("In your cart, you have " + Object.keys(cart)[0] + " at $" +
      Object.values(cart)[0] + " and " + Object.keys(cart)[1] + " at $" +
      Object.values(cart)[1] + "." )

      return ("In your cart, you have " + Object.keys(cart)[0] + " at $" +
      Object.values(cart)[0] + " and " + Object.keys(cart)[1] + " at $" +
      Object.values(cart)[1] + "." )

  } else {

     var items = [];

     for (var i = 0; i < Object.keys(cart).length; i++) {

     items.push(Object.keys(cart[i]) + " at $"  + Object.values(cart[i]) )
     // lastItem.push()

     }
     console.log("In your cart, you have " + items.join(", ") + "and");
     return items;
   }

}




function total() {

var sum = 0;
  for (var price in cart) {
    if ( cart.hasOwnProperty(price) ) {

    sum += parseFloat( cart[price] );

  }
}
  return sum;
}

var total = sum(cart);



function removeFromCart(item) {

delete cart.watermelon;
return cart;

if (cart !== item) {

  console.log("this item in not in ou cart")
    return ("this item in not in ou cart")
}



}

function placeOrder(cardNumber) {
  // write your code here
}
