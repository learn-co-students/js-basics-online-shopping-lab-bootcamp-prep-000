var cart = [];

var newItems = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var lastItem = `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`;
//    for (var i = 0; i < cart.lenth-2; i++){
//      newItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
//    }
		cart.forEach((item, index) => {
			newItems.push(` ${item.itemName} at $${item.itemPrice}`)
		})
		newItems.pop()
    return `In your cart, you have${newItems}, ${lastItem}.`;
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var inCart = false;
  for(var i = 0; i<cart.length; i++){
    if(item === cart[i].itemName){
      inCart = true;
      cart.splice(i,1);
    }
  }
  if (inCart) {
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
