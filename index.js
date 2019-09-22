var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
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
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
