var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 10) + 1;
 var newItem = {[item]: price};
 cart.push(newItem);
 console.log(item + " has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
   var cartList = "In your cart, you have ";
   for(var i = 0; i < cart.length; i++){
  	  var itemText = "";
	    var keys = Object.keys(cart[i]);
		itemText += keys[0] + " at $" + cart[i][keys[0]];
		if(cart.length === 2){
			if(i === 0){
				itemText += " and ";
			}
		} else{

		  if(i === cart.length - 2) {
		    itemText += ", and ";
		  } 
		  if(i < cart.length - 2){
	    	  itemText += ", ";
	    }
		}
		cartList += itemText;
	}
	cartList += ".";	
	console.log(cartList);
  }
}

function total() {
  // write your code here
  var total = 0;	
	for(var i = 0; i < cart.length; i++){
	  var keys = Object.keys(cart[i]);
	  total += cart[i][keys];
	}
	return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
		var keys = Object.keys(cart[i]);
		console.log(item, keys);
		if(item === keys[0]){
			console.log("match...deleting");
		  cart.splice(i, 1);
		  return;
		}
	}
	console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
		console.log("Sorry, we don't have a credit card on file for you.");
	} else {
		var text = "Your total cost is $";
		text += total() + ", which will be charged to the card " + cardNumber + ".";
		console.log(text);
		cart = [];
	}
}
