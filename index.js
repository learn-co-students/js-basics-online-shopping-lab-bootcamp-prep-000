var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: `${item}`, itemPrice: Math.floor(Math.random()* 100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (getCart().length === 0){
    return "Your shopping cart is empty.";
  }
  else if (getCart().length === 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }
  else {
    var output = [];
    for (let i = 0; i < getCart().length; i++){
      output.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    }
      output[output.length-1] = `and ${output[output.length -1]}`;
    return `In your cart, you have ${output.join(", ")}.`;
  }
}

function total() {
  var sum = 0;
  for (let i = 0; i < getCart().length; i++){
  sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length ; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
    return cart;
  }
}
    return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (arguments[0] === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
