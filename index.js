var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var itemPrice = Math.floor(Math.random() * 100) + 1;

  var items = {};

  items[item] = itemPrice;

  cart.push(items);

  console.log(item + " has been added to your cart.");

  return cart;



}

function viewCart() {

  if (cart.length === 0) {

    console.log("Your shopping cart is empty.")

  } else {

      var items = [];

      for (let i = 0; i < cart.length; i++) {

        for (let item in cart[i]) {

          items.push(item + " at $" + cart[i][item])

        }

      }

    console.log("In your cart, you have " + items.join(", ") + ".");

  }

}

function total() {

  var t = 0

   for(var i=0; i< cart.length; i++){

     for (var item in cart[i]){

       t+= cart[i][item]
     }
   }
   return t
}

function removeFromCart(item) {

  var itemInCart = false

  for (let i = 0; i < cart.length; i++) {

    if (cart[i].hasOwnProperty(item)) {

      itemInCart = true;

      cart.splice(i, 1);

    }

  }

  if (!itemInCart) {

    console.log("That item is not in your cart.")

  }

  return cart;

}

function placeOrder(cardNumber) {

  if (!!cardNumber ===  false) {

    console.log("Sorry, we don't have a credit card on file for you.")

  } else {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  }

  setCart(new Array);
  
}
