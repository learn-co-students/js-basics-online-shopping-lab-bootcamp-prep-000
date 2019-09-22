var cart = [];
var resetCart = false

function getCart() {
  if (resetCart === true) {
    cart = [];
  }
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function emptyCart() {
    //empty the cart
    cart.length = 0;
}

function addToCart(itemName) {
    // make random price for itemObj
    var itemPrice = Math.floor((Math.random() + 0.01)* 100);

    // make into an object - { itemName: name of the item, itemPrice: price of the item, }
    var itemObj = {itemName:itemName, itemPrice:itemPrice};
 
    // add to cart array
    cart.push(itemObj);
 
    //return message indicating that the item has been added to cart
   return (itemName + ' has been added to your cart.');
}

function viewCart() {
  if (cart.length === 0) {
    return ('Your shopping cart is empty.');
  }
  // In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  var cartContents = "In your cart, you have "
  //In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}
  
  for (var i = 0; i < cart.length; i++) {
    var pos = i +1 ;
    if (cart.length == 1) {
      cartContents = (cartContents  + cart[i].itemName + " at $" + cart[i].itemPrice + ".");
      return cartContents;
    }
    
    // for items 2 --> 2nd to last ...
    if (pos != cart.length) {    
      cartContents = (cartContents  + cart[i].itemName + " at $" + cart[i].itemPrice + ", ");
    }  
    // for last item ...
    if (pos == cart.length) {
        cartContents =  (cartContents  + "and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".");
    }
  }
  return cartContents;
}

function total() {
  var priceSum = 0;
  for (var i = 0; i < cart.length; i++) {
    priceSum += cart[i].itemPrice;
  }
  return priceSum;
}

function removeFromCart(item) {
  
  // check if item is in cart
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      found = true;
      // Item is in cart, use index and remove it ...
      cart.splice(i, 1);
    }
  }  
  if (found === false) {
    return ("That item is not in your cart.") ;
  }
} 

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.");
  } else {
    // empty the cart and process transaction
    resetCart = true;
    return ("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
  }
}




