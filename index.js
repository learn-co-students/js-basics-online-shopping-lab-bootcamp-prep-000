

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


addToCart('glove')
addToCart('ball')
addToCart('skis')
addToCart('shoes')


function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
} else {
  for (let i = 0; i < cart.length - 1; i++){
    cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `)}}
 cartItems.push(`and ${cart[-1].itemName} at $${cart[-1].itemPrice}.`)
     return `In your cart, you have ${cartItems}.` 


}

viewCart(cart);


function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i++){
    var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)}
    
    for (var j =0; j < pricePerItemInCart.length; j++)
    {
      totalPrice = pricePerItemInCart[j]+=totalPrice;
    }
    return totalPrice
  }
  
total(cart);



removeFromCart('skis');
  
  
function placeOrder(cardNumber) {
  if(cardNumber) 
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--)
    { cart.pop();} 
  }
  else 
  {
    console.log('Sorry, we don\'t have a credit card on file for you.')
    return cart;
  }
}

placeOrder();



