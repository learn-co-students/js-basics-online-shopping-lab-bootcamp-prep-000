var cart = [];

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function generate_price(){
	var price = 0;
	var min = 1;
	var max = 100;
	price = Math.floor(Math.random() * (+max - +min));
	return price;
}

function addToCart(itemName) {
 // write your code here
 	var item_obj = {};
 	item_obj["itemName"] = itemName;
 	item_obj["itemPrice"] = generate_price(); 
 	cart.push(item_obj);
 	return `${itemName} has been added to your cart.`;
}


//Stick a comma between items if not end of array, otherwise stick a (.).
function formatCartAccordingly(){
	var cartArrayFormatted = [];
	for(var i = 0; i < cart.length; i++){
		var element = cart[i];
		if (cart.length - 1 != i){
			cartArrayFormatted[i] = `${element["itemName"]} at $${element["itemPrice"]},`;
		}else{
			if (cart.length === 1){
			cartArrayFormatted[i] = `${element["itemName"]} at $${element["itemPrice"]}.`;
			}else{
				cartArrayFormatted[i] = `and ${element["itemName"]} at $${element["itemPrice"]}.`;
			}
		}
	}
return cartArrayFormatted;
}


function viewCart() {
  // write your code here
  var message = "In your cart, you have";
  if(cart.length === 0){
  	return "Your shopping cart is empty.";
  }else{
	var current_cart_items = formatCartAccordingly().join(" ");
	return `${message} ${current_cart_items}`;  	
  }//if-else ends here.

}

//this function takes all the prices from cart and puts them in an arry.
function getItemsPrices(){
	var itemPrices = [];
	for (var i = 0; i < cart.length; i++){
		itemPrices.push(cart[i]["itemPrice"]);
	}
	return itemPrices;
}


function total() {
  // write your code here

  var prices = getItemsPrices();
  var total = 0;
  var hold_sum = 0;
	for(var i = 0; i < prices.length - 1; i++){
		hold_sum = prices[i] + prices[i + 1];
		prices[i + 1] =	hold_sum;
		total = hold_sum;
	}
	return total = hold_sum;
}

function resize_cart(index){
	for(var i = index; i < cart.length; i++){
		cart[i] = cart[i + 1];
	}
	cart.length = cart.length - 1;	
return cart;
}

function removeFromCart(item) {
  
	if (cart.length  === 1 && cart[0]["itemName"] === item ){
  			cart = [];
  			console.log(`I am the item being removed ${item} car is empty`);
  			return cart;
	}else{	
		for(var i = 0; i < cart.length; i++){
			if(cart[i]["itemName"] === item){
				console.log(`I am the item being removed ${item} need to shift values`);
				return resize_cart(i);
			}//for-if ends here.
		}//for ends here.
  	}
  	return "That item is not in your cart.";
}

function clearCart(){
	cart = [];
}

function placeOrder(cardNumber) {
	if(cardNumber){
		var theTotal = 0;
		theTotal = total();
		clearCart();		
		return `Your total cost is $${theTotal}, which will be charged to the card ${cardNumber}.`

	}else{
		return "Sorry, we don't have a credit card on file for you."
	}
	
}
