var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  var itemInfo = {[itemName]: itemPrice}
  cart.push(itemInfo)
  console.log(`${itemName} has been added to your cart.`)
  return cart 
}

function viewCart() {
  var cartSummary = [];
  var youHave = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var specificItem = Object.keys(cart[i]);
    var associatedPrice = cart[i][specificItem];
        cartSummary.push(specificItem +' at $'+ associatedPrice)  }
    var twoItems = cartSummary.join(' and ');
    var beforeOxford = cartSummary.slice(0, -1).join(', ');
    var afterOxford = cartSummary.slice(-1);

  if (cart.length === 0){console.log('Your shopping cart is empty.')}
  else if (cart.length === 1){console.log(`${youHave} ${cartSummary}.`)}
  else if (cart.length === 2){console.log(`${youHave} ${twoItems}.`)}
  else if (cart.length > 2){console.log(`${youHave} ${beforeOxford}, and ${afterOxford}.`)}
  }
  
  
  
function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    var anItem = Object.keys(cart[i]);
    var aPrice = cart[i][anItem];
    totalPrice = totalPrice + aPrice;
  }
    return totalPrice;
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
      return(cart);
    }
  }
  console.log("That item is not in your cart.");
}
    

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you."); 
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
cart = [];
}

