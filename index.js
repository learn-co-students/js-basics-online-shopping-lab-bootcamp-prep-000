var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//1) addToCart() can add items to the cart:
//2) addToCart() turns items into JavaScript objects before adding them to the cart:
//3) addToCart() properly structures objects in the { itemName: itemPrice } format:
//4) addToCart() sets the price as an integer between 1 and 100:
//5) addToCart() chooses the price at random:
//6) addToCart() prints a message to the console indicating that the item has been added:
//7) addToCart() returns the cart:

function addToCart(itemName) {

  var max = Math.floor(101); //exclusive
  var min = Math.ceil(1); //inclusive
  var itemPrice = Math.floor(Math.random() * (max - min)) + min;

  var object = { [itemName]: itemPrice }
  object[itemName] = itemPrice
  cart.push(object)
  console.log(`${itemName} has been added to your cart.`)
  return cart

}

//8) viewCart() prints 'Your shopping cart is empty.' if the cart is empty:
//9) viewCart() correctly prints a one-item cart:
//10) viewCart() correctly prints a two-item cart:
//11) viewCart() correctly prints a three-or-more-item cart:
function viewCart() {
  if (cart.length === 0) {
    console.log (`Your shopping cart is empty.`);
  } else if (cart.length === 1) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else  {
    var threeOrMore = [`In your cart, you have`]
    for (var i = 0; i < cart.length - 2; i++) {
      threeOrMore.push (` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    threeOrMore.push (` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, and ${Object.keys(cart[i+1])} at $${cart[i+1][Object.keys(cart[i+1])]}.`);
    threeOrMore = threeOrMore.join();
    threeOrMore = threeOrMore.replace(`have,`,'have');
    console.log(threeOrMore)
  }
}

//12) total() adds up the price of all items in the cart:
function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost = totalCost + cart[i][Object.keys(cart[i])];
  }
  return totalCost;
}

//13) removeFromCart() removes the specified item from the cart:
//14) removeFromCart() alerts you if you're trying to remove an item that isn't in your cart:
function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log (`That item is not in your cart.`);
}

//15) placeOrder() doesn't place the order if a credit card number is not provided:
//16) placeOrder() places an order when a credit card number is provided:
function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log (`Sorry, we don\'t have a credit card on file for you.`);
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}
