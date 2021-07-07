var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100 + 1);
  var item = {[itemName]: itemPrice};
  // I need to add a new object to the array "cart".
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartList = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }
  for (let i = 0; i < cart.length; i++ ) {
    var object = cart[i];
    var key = Object.keys(object)[0];
    var price = object[key];
    cartList.push(`${key} at $${price}`)
  }
  // for (var i = 0; i < cart.length; i++) {
  //   for (var key in cart[i]) {
  //     var price = cart[i][key]
  //     cartList.push(`${key} at $${price}`)
  //   }
  // }
   if (cart.length === 1) {
    console.log(`In your cart, you have ${cartList}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${cartList[0]} and ${cartList[1]}.`)
  } else {
  //  cartList[cartlist.length - 1] = `and ${cartList.last}`
    console.log(`In your cart, you have ${cartList.slice(0,-1).join(', ')}, and ${cartList[cartList.length - 1]}.`)
  }
}

function total() {
  //var totalPrice = [];
  var sum = 0;
  // iterates through the cart array, and returns the current total value of the items in the cart.
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i];
    var key = Object.keys(object)[0];
    var price = object[key];
    sum += price; //VERY USEFUL
// The Reduce method works too, but is sloppier.
    //totalPrice.push(price);
    //console.log(totalPrice);
    //var sum = totalPrice.reduce((a, b) => a + b, 0);
    //console.log(sum);
  }
  return sum;
}

function removeFromCart(item) {
  /* If the cart does not contain a matching item, the function should print out That item is not in your cart. and return the unchanged cart*/
  /* If the item is present in the cart, the function should remove the object from the cart and then return the updated cart  */
  //function should loop through cart checking to see if item matches
  // an object key in cart. if it evaluates to true, remove item and
  //return new array.
  //Otherwise, it should log "That item is not in your cart."
  for (let i = 0; i < cart.length; i++) {
    var object = cart[i];
    var key = Object.keys(object)[0];var price = object[key];
    if (object.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    total();
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return cart.splice(0, cart.length)
    /* Returns a list of items in the cart as it gets deleted: AKA a receipt! */
  }
}
