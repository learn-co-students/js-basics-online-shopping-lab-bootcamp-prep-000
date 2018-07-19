var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//ramdom intereger 0-100
// function randomPriceGen(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

//ramdom intereger 1-100
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addToCart(item) {
 // write your code here
 // var newCart = { xName: x , xPrice: randomPriceGen(100) }

 var newCart = { itemName: item, itemPrice: getRandomInt(1, 100) };
 //add item set object to 'cart' array. 
 //cart.push(newCart)
 cart.push(newCart);
 //return `${x} has been added to your cart.`
 return `${item} has been added to your cart.`;
}


addToCart("apple")
addToCart("banana")
addToCart("chilly")
addToCart("papaya")


var cartSet = []; //New array to store new objects 

function viewCart(){
  var cartSet = []; //New array to store new objects 
  var n = cart.length
	for(var i = 0; i < n; i++) {
	  cartSet.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
	} //loop cart array, retrieve data, create new objects and store in the new array
	
	if ( n === 0) {
  	console.log("Your shopping cart is empty.");
  } 
  else if ( n === 1 ) {
  	console.log(`In your cart, you have${cartSet[0]}.`);
  }
  else {
  	console.log(`In your cart, you have${[...cartSet.slice(0, n-1)]}, and${[...cartSet.slice(n-1)]}.`);
  }
}

viewCart()

function total() {
  // write your code here
	var totalprice = 0;
	for (var i = 0; i < cart.length; i++) {
		 totalprice += cart[i].itemPrice
	}
	return totalprice
}

total()

function removeFromCart(item){

	for(var i = 0; i < cart.length; i++){
	  
	  var keyItem = cart[i].itemName
	  
	  if (keyItem === item) {
		  console.log(`${keyItem} removed!`);
			cart.splice(i, 1);
		}
	  else {
			console.log("That item is not in your cart.");
		}
	}
	return cart
}

removeFromCart('apple')

var cardNumber = Math.floor(Math.random() * 100000000);

function placeOrder(cardNumber) {
  // write your code here

  var cardDigit = cardNumber.toString().length;

  if (cardDigit == 8 ) {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " +  cardNumber)
    cart.length = 0
  }
  else if (cardDigit != 8) {  
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}




