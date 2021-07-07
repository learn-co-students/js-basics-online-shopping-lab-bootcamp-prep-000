var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {itemName: item, itemPrice: Math.floor((Math.random()*100)+1)};
  var c = getCart();
  cart.push(newObject);
  setCart(c);
  return `${item} has been added to your cart.`;
}

/*
var item = "Banana";
console.log(addToCart(item));
var item2 = "Apple";
console.log(addToCart(item2));
console.log(getCart())
*/

function viewCart() {
  var c = getCart();
  var n = c.length;
  
  if (n===0) {
    return "Your shopping cart is empty.";
  } else if (n==1) {
  		return `In your cart, you have ${c[0].itemName} at $${c[0].itemPrice}.`;
  	} else if (n==2) {
  		return `In your cart, you have ${c[0].itemName} at $${c[0].itemPrice}, and ${c[1].itemName} at $${c[1].itemPrice}.`;
  	} else {
  		var returnSentence = `In your cart, you have ${c[0].itemName} at $${c[0].itemPrice},`;
  		for (let i = 1; i <= n-2; i++) {
  			returnSentence = `${returnSentence} ${c[i].itemName} at $${c[i].itemPrice},`;
  		}
  		returnSentence = `${returnSentence} and ${c[n-1].itemName} at $${c[n-1].itemPrice}.`;
  		return returnSentence;
  	}
}

function total() {
  var c = getCart();
  var countdown = c.length;
  var totalSum = 0;
  if (countdown === 0) {
    return totalSum;
  } else {
    while (countdown > 0) {
      totalSum = totalSum + c[countdown-1].itemPrice;
      countdown--
    }
    return totalSum;
  }
}

function removeFromCart(item) {
  var c = getCart();
  var n = c.length;
  var found = false;
  for (let i = 0; i < n; i++) {
    if (c[i].itemName != item) {
      continue;
    } else {
      c.splice(i,1);
      found = true;
      break;
    }
  }
	if (found) {
	  setCart(c);      
	  return c;
	} else {
	  return "That item is not in your cart.";
	}
    
  
}

function placeOrder(cardNumber) {
  if (cardNumber != null) {
    var totalSum = total();
    setCart([]);
    return `Your total cost is $${totalSum}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
