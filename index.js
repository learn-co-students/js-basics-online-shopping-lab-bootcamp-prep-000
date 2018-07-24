var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
}

function addToCart(itemname) {
 // write your code here
  let price = Math.floor(Math.random() * (100 - 1) + 1);
  cart.push({itemName:itemname, itemPrice:price});
  return `${itemname} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var string = 'In your cart, you have ' 
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    string += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return string;
  } else {
  	for (let i = 0; i < cart.length - 1; i++) {
    let object = cart[i];
    let item = object.itemName;
    let price = object.itemPrice;
    string += `${item} at $${price}, `;
    }
  } 
  return string + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
}


function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    let object = cart[i];
    let price = object.itemPrice;
    sum += price;
  }
  return sum;
}


function removeFromCart(itemName) {
  for (let i = 0; i < cart.length; i++) {
  	let obj = cart[i];
  	let item = obj.itemName;
    if (itemName === item) {
      cart.splice(i, 1);
      return cart;
    } 
  }
   return "That item is not in your cart.";
}


function placeOrder(creditCard) {
	if (creditCard === 1111222233334444) {
	  let sum = total();
    cart.splice(0);
	  return `Your total cost is $${sum}, which will be charged to the card ${creditCard}.`;
	} else {
	  return `Sorry, we don't have a credit card on file for you.`;
	}
}

