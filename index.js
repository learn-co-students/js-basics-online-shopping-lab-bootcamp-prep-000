var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // declare a variable object for new items with a name and price key.
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)});
 return `${item} has been added to your cart.`;
}	

function viewCart() {
  if (!cart.length){
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } 
  else {
    var output = `In your cart, you have `;
    for (var i = 0; i < cart.length; i++){
    if (i < cart.length - 1) {
      output += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  } else {
      output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
  }
  return output;
}
}

function total() {
  //Initialize a variable with label sum and loop through cart's array of objects for itemPrice. 
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}	
     
function removeFromCart(item) {
  //Iterate through cart to find and remove the object with itemName matching the string we want.
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // If cardNumber is a not a number, print error message.
  if (typeof cardNumber !== "number") {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
  //Initialize a variable with label cartTotal with a value equal to value of function total.
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
