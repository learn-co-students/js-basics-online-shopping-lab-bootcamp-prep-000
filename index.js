var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = new Object();
 newItem.itemName = item;
 newItem.itemPrice = Math.floor(Math.random() * (100 -1)) + 1; // random price b/n 1 & 100

 // add the new Object to the cart
 cart.push(newItem);

 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) //empty cart?
      return "Your shopping cart is empty."

  var statement = "In your cart, you have"
  // use correct grammar (puntuation, 'and' )
  for (var i = 0; i < cart.length; i++) {
    if (0 === i) //no punctuation needed before first item
        statement += " ";
    else if (cart.length > 1 && cart.length -1 === i) // add 'and' before last item
        statement += ", and ";
    else
        statement += ", ";

    statement += `${cart[i].itemName} at $${cart[i].itemPrice}`;
  }
  statement += "."; //closing full-stop
  return statement;
}

function total() {
  // write your code here
  var totalPrice = 0;

  for(var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }

  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item) { // this is the Object
      cart.splice(i, 1) // remove 1 element at position i

      return cart;      // and return new cart
    }
  }
  // have not found the item
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (null === cardNumber || undefined === cardNumber)
      return "Sorry, we don't have a credit card on file for you."

  // else
  let statement = `Your total cost is $${total()}, which will be ` +
                  `charged to the card ${cardNumber}.`

  // empty cart
  cart = [];

  return statement;

}
