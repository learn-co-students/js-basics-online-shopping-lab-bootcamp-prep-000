var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;//randomly generate integer from 1 to 100.
  var item = {};//empty variable for item
  item[itemName]= itemPrice; // using bracket notation to set key value pair
  cart.push(item); // pushing the object to the cart
  console.log (`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
    if (cart.length === 0) {
      console.log('Your shopping cart is empty.');
    }
    else if (cart.length === 1) {
      var firstObject = cart[0];
      for (var item in firstObject){
        var price = firstObject[item];
        console.log(`In your cart, you have ${item} at $${price}.`);
      }
    }
  }


// var TotalValue = itemPrice;
// var sum = 0;
// function total () {
//   for (i = 0; i < cart.length; i++){ //iterate through our itemPrice array
//   sum += TotalValue[i];
//  }
// }

// function removeFromCart (removedItem){
//
// }
