var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
 let price = Math.floor(Math.random() * 10) + 1;
 cart.push({[item] : price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }else {
    var array = [];
    for(let i = 0; i < cart.length; i++){
      var price = Object.keys(cart[i]);
      array.push(`${Object.keys(cart[i])} at $${cart[i][price]}`);
    }
    if(cart.length === 1){
      console.log(`In your cart, you have ${array}.`)
    }
    else if(cart.length === 2){
      console.log(`In your cart, you have ${array.join(" and ")}.`);
    } else {
      array[array.length - 1] = "and " + array[array.length -1 ]
      console.log(`In your cart, you have ${array.join(", ")}.`)
    }
  }
}

function total() {
   let total = 0;
	for (let i = 0; i < cart.length; i++) {
		for (let item in cart[i]) {
		total = total + cart[i][item];
		}
	}
	return total; 
}


function removeFromCart(item) {
  let itemInCart = false;

	for (let i = 0; i < cart.length; i++) {
		if (cart[i].hasOwnProperty(item)) {
			itemInCart = true;
			cart = cart.slice(0, i).concat(cart.slice(i + 1));
			return cart;
		}
	}

	if (!itemInCart) {
		console.log('That item is not in your cart.');
	} 
}

function placeOrder(cardNumber) {
  if (cardNumber) {
		console.log(
			`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
		);
		cart = [];
	} else {
		console.log("Sorry, we don't have a credit card on file for you.");
	}
}
