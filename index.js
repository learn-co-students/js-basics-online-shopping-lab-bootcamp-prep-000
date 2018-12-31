var cart = [];

function getCart() {
 return cart;
}

function addToCart(item) {
	var price = Math.floor(Math.random() * 100); 
	var obj = 	{
			itemName: item,
			itemPrice: price
		};
	cart.push(obj);
	return `${item} has been added to your cart.`; 
}


function viewCart() {
	if(cart.length===0){
		return "Your shopping cart is empty."; 
	}
	var retValue = 'In your cart, you have' ; 
	//If cart is not empty 
	for(var i=0;i<cart.length;i++){
  		if(i>0){
  			retValue+= `,`; 
  		}
  		if(i>0 && i==cart.length-1){
  		  retValue+= ` and`; 
  		}
	retValue += ` ${cart[i].itemName} at \$${cart[i].itemPrice}`;
	}
	retValue += "." //Add dot
	return retValue;
}

function setCart(c) {
  cart = c;
  return cart;
}



function total() {
  var ret=0;
  for(var i=0;i<cart.length;i++){
    ret+= cart[i].itemPrice;
  }
  return ret; 
  
}

function removeFromCart(item) {
  var itemFound = false; 
	for(var i=0;i<cart.length;i++){
		if(cart[i].itemName == item){
			itemFound=true;
			cart.splice(i,1);
		}
	}
	if(itemFound){
		return cart
	} else {return `That item is not in your cart.`}
	
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined){
		return `Sorry, we don't have a credit card on file for you.`
	}
	var ret =  `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`; 
	cart = [];
	return ret; 
}
