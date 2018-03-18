var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = (Math.floor(Math.random() * 100) + 1);
  var newObject = { itemName: item, itemPrice: price };
  cart.push(newObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var cartString = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++)
    if (i < cart.length - 1){
      cartString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
      cartString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    return cartString;
  }
}
 

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    } 
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  var totalCost = total();
  if (arguments.length === 0){
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
