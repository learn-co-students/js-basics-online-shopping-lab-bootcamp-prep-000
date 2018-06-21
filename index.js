var cart = [];

  
  

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function generateCartItem(name){
  return { itemName: name, 
    itemPrice: Math.floor(Math.random()*100)
  }
}

	
function addToCart (item) {
  var newItem = generateCartItem(item);
  cart.push(newItem);
return `${item} has been added to your cart.`;
}
  
  

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  if (cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
    if (cart.length === 2){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
       if (cart.length === 3){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    }
  
  
  
}

function total() {
var sum = 0;
for (var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;}
    return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
}

    return 'That item is not in your cart.'

}
function placeOrder(cardNumber) {
    let tot = total();
  cart = [];
  if (cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
     return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
}

}
