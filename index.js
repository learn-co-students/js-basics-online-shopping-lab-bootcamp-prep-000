var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
  var item = {itemName: itemName, itemPrice: Math.floor(Math.random() * 100 + 1)};
  
  cart.push(item);
  
  return itemName + " has been added to your cart."
  
}

function viewCart() {
// write your code here
  var cartItemMsg = "In your cart, you have ";

  if(cart.length === 0){
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
   cartItemMsg += cart[0].itemName + " at $" + cart[0].itemPrice + ".";
    return cartItemMsg
  } else {
    cartItemMsg += cart[0].itemName + " at $" + cart[0].itemPrice;
    for(var i = 1; i < (cart.length)-1; i++){
      cartItemMsg += ", " + cart[i].itemName + " at $" + cart[i].itemPrice;
    }
    cartItemMsg += ", and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + ".";
    return cartItemMsg
  }
  
}

function total() {
  // write your code here
  var total = 0
	cart.forEach(function(price){
    	total += price.itemPrice;
	});
	return total
}

function removeFromCart(item) {
  // write your code here
  for( var i = 0; i < cart.length; i++){ 
    if ( cart[i].itemName === item ){
       cart.splice(i, 1); 
       return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
      var amt = total()
      cart = []
      return "Your total cost is $" + amt + ", which will be charged to the card " + cardNumber + "."
    }
    return "Sorry, we don't have a credit card on file for you."
}
