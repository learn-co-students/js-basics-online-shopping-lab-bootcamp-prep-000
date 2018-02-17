var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100);
  var item = {[itemName]:itemPrice};
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsInCart = cart.length;
  if (itemsInCart === 0) {
    console.log("Your shopping cart is empty.");
  }
  if (itemsInCart === 1) {
    var singleItem = Object.keys(cart[0])[0];
    var singleItemPrice = cart[0][singleItem];
    return console.log(`In your cart, you have ${singleItem} at $${singleItemPrice}.`);
  }
  if (itemsInCart === 2) {
    var twoItems1 = Object.keys(cart[0])[0];
    var twoItems2 = Object.keys(cart[1])[0];
    var twoItemsPrice1 = cart[0][twoItems1];
    var twoItemsPrice2 = cart[1][twoItems2];
    return console.log(`In your cart, you have ${twoItems1} at $${twoItemsPrice1} and ${twoItems2} at $${twoItemsPrice2}.`)
  }
  if (itemsInCart > 2) {
    var stringStub = 'In your cart, you have '
    var copyOfCart = cart.slice(1, -1)
    var copyOfCartLength = copyOfCart.length;
    var firstItem = Object.keys(cart[0])[0];
    var firstItemPrice = cart[0][firstItem];
    var string = stringStub + `${firstItem} at $${firstItemPrice},`
    for (let i = 0; copyOfCartLength > i; i++) {
      var middleItems = Object.keys(copyOfCart[i])[0];
      var middleItemsPrice = copyOfCart[i][middleItems];
      string += ` ${middleItems} at $${middleItemsPrice},`;
      } 
    var lastItem = Object.keys(cart[cart.length-1])[0];
    var lastItemPrice = cart[cart.length-1][lastItem];
    string += ` and ${lastItem} at $${lastItemPrice}.`;
    return console.log(string);
  }
}

var sum = 0;

function total() {
  var sumCopy = 0;
  for (let i = 0; cart.length > i; i++) {
   sumCopy += cart[i][Object.keys(cart[i])[0]];
  }
  sum = sumCopy;
  return sumCopy;
}

function removeFromCart(removeMe) {
  var beforeCart = cart.slice(0);
  var beforeCartLength = beforeCart.length;
  var notFound = '';
  var found = '';
  for (let i = 0; cart.length > i; i++) {
    if (cart[i].hasOwnProperty(removeMe) === true) {
      cart.splice(i, 1);
      found += 'Found';
      return console.log(cart);
    }
  }
  if (notFound === found) {
    return console.log('That item is not in your cart.');
  }
}

function placeOrder(ccn) {
  if (ccn === undefined) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  } else {
     console.log(`Your total cost is $${sum}, which will be charged to the card ${ccn}.`);
     cart = [];
  }
}
