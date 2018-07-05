var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var item2 = getCartItem(item);
    getCart().push(item2);

    return `${item2.itemName} has been added to your cart.`;
   }
   
function getCartItem(itemName) {
  return {
      itemName: itemName,
      itemPrice: getPrice(1, 100)
    };
}

function getPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function viewCart() {
  if (getCart().length === 0 ) {
   return  "Your shopping cart is empty.";
  }   
  return getCartDescription();
}  
 
function getCartDescription() {
  var cartDescription = 'In your cart, you have ';
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  }
  if ( getCart().length >= 2 ) {
    var midCartDescription = '';
    for (var i = 1; i < getCart().length - 1; i++) {
      midCartDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    }
    cartDescription += `${midCartDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`;
  }

  return `${cartDescription}.`;
}

function total() {
  var itemTotal = 0;
  for (var i = 0; i < getCart().length; i++) {
    itemTotal = itemTotal + getCart()[i].itemPrice;
  }
    return itemTotal;
}

function removeFromCart(itemName) {
  for (var i = 0; i < getCart().length; i++){
    var delItem;
    if (getCart()[i].itemName === itemName) {
      delItem = cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var itemSum = total();
    setCart([]);
    return `Your total cost is $${itemSum}, which will be charged to the card ${cardNumber}.`;
  }
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
