var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {};
  newObject.itemName = item;
  newObject.itemPrice = Math.round(Math.random() * 100);
  cart.push(newObject);
  return `${newObject["itemName"]} has been added to your cart.`
}
function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if(cart.length === 1) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`;
  }
  else{
    return `In your cart, you have ${cart
		  		.map((currentValue, index, array) => {
			  		if(index !== array.length - 1) {
				  		return `${array[index]["itemName"]} at $${array[index]["itemPrice"]}, `;
					  	}
					  else {
						  return `and ${array[index]["itemName"]} at $${array[index]["itemPrice"]}.`;
                      }
					  })
				  .join("")}`
  }
}

function total() {
  return cart.reduce((acc, currVal) => acc + currVal.itemPrice, 0);
}

function removeFromCart(item) {
  var index = cart.findIndex(x => x.itemName === item);
  console.log(index);
  if(index === -1) {
    return "That item is not in your cart."
  }
  else {
    cart.splice(index, 1);
  }
}

function placeOrder(cardNumber) {
  if(typeof(cardNumber) !== "number") {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}