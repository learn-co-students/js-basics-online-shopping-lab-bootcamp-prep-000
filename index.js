var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 var price = Math.floor(Math.random() * 100 + 1);
 var purchase = new Object({});
 purchase['itemName'] = item;
 purchase['itemPrice'] = price;
 cart.push(purchase);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var allItems = [];
    var finalItem = cart.slice(-1)
    for (var i = 0; i < cart.length-1; i++) {
      var description = ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
      allItems.push(description);
    }
    var finalDescription = ` and ${finalItem[0].itemName} at $${finalItem[0].itemPrice}`;
    allItems.push(finalDescription);
    var itemList = allItems.toString();
    return `In your cart, you have${itemList}.`;
  }
} 

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++)
    sum += cart[i].itemPrice;
    return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart
    } 
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var cartTotal = total()
  if (cardNumber) {
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  return `Sorry, we don't have a credit card on file for you.`
}
