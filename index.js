var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var newItem = generateCartItem(item);
  getCart().push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  if (!cart.length){
    return 'Your shopping cart is empty.';
  }
  var description = "In your cart, you have ";
  for (let i = 0; i < cart.length; i++){
    description = `${description}${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i >= 0 && i < cart.length-2) {
      description = `${description}, `;
    }
    if (i === cart.length-2) {
      description = `${description}, and `;
    }
  }
  return `${description}.`;
}

function total(){
  var total = 0;
  for (let i =0; i < getCart().length; i++){
    total += getCart()[i].itemPrice;
  }
  return total;
}
function removeFromCart(item) {
  var itemIndex = -1;
  
  for (let i = 0; i< cart.length; i++){
    if(cart[i].itemName === item){
      itemIndex = i;
    }
  }
  
  if (itemIndex === -1){
    return "That item is not in your cart.";
  }
  
  return getCart().splice(itemIndex, 1);
}

function placeOrder(card){
  if(card === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var sum = total();
    setCart([]);
    return `Your total cost is $${sum}, which will be charged to the card ${card}.`;
  }
}
//helper function
function generateCartItem(item){
  var newItem = {
    itemName: item,
    itemPrice: getRandomInt(1, 100),
  };
  return newItem;
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}