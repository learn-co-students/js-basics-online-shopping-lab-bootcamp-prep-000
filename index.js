var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);

  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var viewPrefix = `In your cart, you have `;
  if(cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  else{
  for(let i = 0; i < cart.length; i++){
    if(i === cart.length - 1 && cart.length > 1){
     viewPrefix += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else if(i === cart.length - 1 && cart.length === 1){
     viewPrefix += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
    viewPrefix += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
  }
  return viewPrefix;
}

function total() {
  var addTotal = 0;
  for(let i = 0; i < cart.length; i++){
    addTotal += cart[i].itemPrice;
  }
  return addTotal;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else {
    var cartTotal = total();
    setCart([]);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
