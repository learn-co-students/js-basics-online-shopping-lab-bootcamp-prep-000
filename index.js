var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let c = {itemName: item, itemPrice: Math.round(Math.random() * (100-1)+1)};
    cart.push(c);
	return `${item} has been added to your cart.` 
 
}

function viewCart() {
  if (cart.length===0){
    return 'Your shopping cart is empty.';
 } 
  else if(cart.length===1) { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  
  }else if (cart.length === 2) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
	}
	else if(cart.length >= 2) {
	  for (var i = 2; i < cart.length; i++) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
   }
 } 
  
}

function total() {
  var totalAmount = 0;
for (var i = 0; i < cart.length; i++) {

    totalAmount += cart[i].itemPrice;
}
return totalAmount
}

function removeFromCart(item) {		
		var itemToRemove = searchCartForItemToRemove(item);
	  return itemToRemove ? removeItemFromCart(itemToRemove) : "That item is not in your cart."
}

function searchCartForItemToRemove(itemName) {   
  var searchResult   
  for (var i=0; i<getCart().length; i++) {     
    if (getCart()[i].itemName === itemName) 
  {searchResult = getCart()[i]}   
    }   
    return searchResult
}

function removeItemFromCart(itemToRemove) {   
  var indexOfItemToRemove = cart.indexOf(itemToRemove)      getCart().splice(indexOfItemToRemove,1) 
}



function placeOrder(cardNumber) {
  if (!!cardNumber) { 
    var x = total();
    cart.splice(0, cart.length)
    
    return `Your total cost is $${x}, which will be charged to the card ${cardNumber}.`
    
  
  } else {return "Sorry, we don't have a credit card on file for you."
  }
  
  }

