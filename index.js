

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart (item) {
  var price = Math.floor((Math.random()*100) + 1);
  var itemObj = {itemName: item, itemPrice: price}
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


addToCart('glove');
addToCart('ball');
addToCart('skis');
addToCart('shoes');


function viewCart() {
  
  var cartItems = [];
  if (cart.length === 0 ) {
    return 'Your shopping cart is empty.'}
  
  else if (cart.length === 1){
    cartItems.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`)} 
  
  else {
  for (let i = 0; i < getCart().length - 1; i++){
    cartItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)}
    
 cartItems.push(` and ${getCart()[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}`);}
 return `In your cart, you have${cartItems}.`     
}

viewCart(cart);

function total() {
  var pricePerItemInCart = 0
  for(var i = 0; i < getCart().length; i++){
    pricePerItemInCart += getCart()[i].itemPrice
  }
  return pricePerItemInCart
}
    
total(cart);



function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i] == (item)) {
      cart.splice(i, 1)
      return cart
    } 
  }
  return 'That item is not in your cart.'
}
  

  
function placeOrder(cardNumber) {
  if(cardNumber)  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      for (var i = getCart().length; i > 0; i--){ 
        cart.pop();
        i--;
      }
  }
  else 
  {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}


