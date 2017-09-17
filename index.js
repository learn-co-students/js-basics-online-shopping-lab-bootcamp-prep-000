var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemAndPrice = {};
  var price = Math.floor(Math.random() * 100)+1;
  itemAndPrice[item] = price;
  cart.push(itemAndPrice);
  console.log(item + " has been added to your cart.");
  return cart;

}

function removeFromCart(item) {
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
   }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function total() {
  // iterates over cart items & adds their prices
  //returns total;
    var totalCost = 0;

    for(var i = 0; i < getCart().length; i++){
      for(var cost in getCart()[i]){
        totalCost += getCart()[i][cost];
      }
    }
    return totalCost;
}


function viewCart(){
   if (cart.length === 0){
     console.log("Your shopping cart is empty.")
   } else {
     var itemsAndPrices = [];

     for (var i in cart){
       var itemAndPrice = cart[i];
       for (var key in itemAndPrice){
         itemsAndPrices.push(key + " at $" + itemAndPrice[key])
       }
     }
     var cartItems = itemsAndPrices.join(", ");
     console.log("In your cart, you have " + cartItems + ".")
   }
 }


 function placeOrder(cc){
    if(!cc){
     console.log("We don't have a credit card on file for you to place your order.");
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
     cart = [];

   }

  }
