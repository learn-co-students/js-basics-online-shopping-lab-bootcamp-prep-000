var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function notifyitemNotInCart() {
  return 'That item is not in your cart.'
}

function addToCart(item) {
  getCart().push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  const newCart = [];
  if(! getCart().length){
    return 'Your shopping cart is empty.';
  }else if(getCart().length === 1){
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }else if(getCart().length === 2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`}else{
    for(let i = 0; i < getCart().length; i++){
      newCart.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    }
    const cartFirst = newCart.shift();
    const cartLast = newCart.pop();
    return `In your cart, you have ${cartFirst}, ${newCart}, and ${cartLast}.`;
  }
}

function total() {
  const cartPrice = [];
  for(let i = 0; i < getCart().length; i++){
      cartPrice.push(getCart()[i].itemPrice)}
  const sumTotal = cartPrice.reduce(function(total, amount){
  return total + amount;
});
  return sumTotal;
}

function removeItemFromCart(removeItem) {
  getCart().splice(removeItem,1);
}

function searchCartItemToRemove(item) {
  var indexI;
  for(let i = 0; i < getCart().length; i++){
    if(getCart()[i].itemName === item){
      indexI = i;
      return indexI;
      break;
  }
 }
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartItemToRemove(itemName);
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyNoItemToRemove();
}

function notifyNoItemToRemove(){
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if(! cardNumber){
    return `Sorry, we don\'t have a credit card on file for you.`;
  }else{
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
