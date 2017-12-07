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

  var finalOutput = ['In your cart, you have']

  for (let i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]; //cart[i] is what the current index is in the array
    var fruit = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[fruit];

    finalOutput.push(`${fruit} at $${price}`)

  }
  if (cart.length === 1) {
    finalOutput = finalOutput.join(' ') + '.'// destructive joining two things
  }

  else if (cart.length === 2) {
    finalOutput = finalOutput.slice(0,2).join(' ') + (' and ') + finalOutput.slice(-1) + '.'
  } 

  console.log(finalOutput);



  // else if (cart.length === 1 ){
  //   var firstObject = cart[0];
  //   var item = Object.keys(cart[0]);
  //   var price = firstObject[item];
  //   console.log (`In your cart, you have ${item} at $${price}.`);
  // }
  // else if (cart.length === 2) {
  //   var secondObject = cart[1];
  //   var firstItem = Object.keys(cart[0]);
  //   var firstPrice = firstObject[item];
  //   var secondItem = Object.keys(cart[1]);
  //   var secondPrice = secondObject[item];
  //   console.log (`In your cart, you have ${firstItem} at $${firstPrice} and ${secondItem} at ${secondPrice}`);
  // }
}

// function total () {
//   for (i = 0; i < cart.length; i++){ //iterate through our itemPrice array
//
//  }
// }
//
// function removeFromCart (removedItem){
//
// }O
