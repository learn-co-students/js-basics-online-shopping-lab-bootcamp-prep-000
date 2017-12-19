var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;//randomly generate integer from 1 to 100.
  var item = {};//empty variable for item
  item[itemName]= itemPrice; // using bracket notation to set key value pair
  cart.push(item); // pushing the object to the cart
  console.log (`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
	  if (cart.length === 0) {
	    console.log('Your shopping cart is empty.');
	    return 'Your shopping cart is empty.';
	  }

	  var beginning = 'In your cart, you have ';

	  var finalOutput = [];

	  for (let i = 0; i < cart.length; i++) {
	    var itemAndPrice = cart[i]; //cart[i] is what the current index is in the array
	    var fruit = Object.keys(itemAndPrice)[0];
	    var price = itemAndPrice[fruit];

	    finalOutput.push(`${fruit} at $${price}`)
	  }

	  var finalOutputString;

	  if (cart.length === 1) {
	    finalOutputString = finalOutput.join(' ') + '.'; // destructive joining two things
	  }

	  else if (cart.length === 2) {
	    // finalOutputString = finalOutput.slice(0,2).join(' ') + (' and ') + finalOutput.slice(-1) + '.';
      finalOutputString = finalOutput.join(' and ') + '.';
	  }

	  else if (cart.length >= 3){
	   finalOutputString = finalOutput.slice(0, finalOutput.length - 1).join(', ') + (', and ') + finalOutput.slice(-1) + '.';
	  }
    console.log(beginning + finalOutputString);
	  return beginning + finalOutputString;
	}

  function total(){
	 var totalPrices = 0;//setting a varaible for when the cart is 0

	 for (let i = 0; i < cart.length; i++) {
	 	// access the cart > cart[i]
	 	var keyName = Object.keys(cart[i]); // this is to access keys

	 	var value = cart[i][keyName]; // to get the value
	 	console.log(value);

	 	totalPrices += value; // adds to totalPrices and saving the value

	 }
	 return totalPrices;
	}

  function removeFromCart(removedItem){
  		var foundIndex = false; //by default assuming that we didn't find anything
  		var index; //keeping track of where we found the item so we can remove it later

  		for (let i = 0; i < cart.length; i++) {
  		var keyName = Object.keys(cart[i]); //find the key name

  		if (keyName[0]===removedItem) {
  			foundIndex = true;
  			index = i;
  		} // If it's in the cart, then remove one thing from the array, and then set where that thing is to index=i
  		}

  		if(foundIndex) {
  		  cart.splice(index, 1);
  		  return cart;
  		}// if we find it then it rmoves based on the index we saved.
  		else {
  			console.log( 'That item is not in your cart.');
  		}
  	}

    function placeOrder(creditCardNumber) {
   	     if (!creditCardNumber){ //using the ! method to say "not credit card or if there is no
   		  console.log (`Sorry, we don't have a credit card on file for you.`)
   		 }
   	     if (creditCardNumber){
   	    console.log (`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
   	     }
         cart = [];   
   	}
