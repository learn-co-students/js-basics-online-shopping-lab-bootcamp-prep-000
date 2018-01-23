var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
	cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){

  if (cart.length === 0){
		console.log(`Your shopping cart is empty.`);
	}

  else if(cart.length === 1){
  	for (var i in cart){
  		console.log(`In your cart, you have ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
  	}
  }

  else {
    var string = "In your cart, you have ";

    for (var i in cart){
    	if (parseInt(i) === (cart.length-1)){
    		string += `${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
    		console.log(string);
    	}
    	else {
      string += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `;
    	}
    }

  }
}

function removeFromCart(item){

	for(var i in cart){
		if (cart[i].hasOwnProperty(item)) {
			cart.splice(i,1);
			return cart;
		}
	}
	console.log(`That item is not in your cart.`);
	return cart;
}

function placeOrder(cardNumber){
	if (!cardNumber){
		console.log("We don't have a credit card on file for you to place your order.");
	}
	else {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
	}
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
