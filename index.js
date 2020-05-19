var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var cartContent = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * Math.floor(100))}
 cart.push(cartContent);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart === undefined || cart.length == 0)
    return "Your shopping cart is empty."
  else{
    var message = "In your cart, you have ";

    for(let i = 0; i < cart.length; i++){
        if(cart.length - 1 === i)
          message += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
        else if(cart.length - 2 === i)
          message += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and `; 
        else
          message += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
    }
    return message;
  }
}

function total() {
  // write your code here
  let i = 0;
  var total = 0;
  while(i < cart.length){
    total += getCart()[i].itemPrice;
    i++;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var removedFlag = false;
  for(let i = 0; i < cart.length; i++){ 
    if (getCart()[i].itemName === item){ 
      cart.splice(i, 1); 
      removedFlag = true;
    }
  }
  if(removedFlag)
    return cart;
  else
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var Total = total();
    setCart([]);
    return `Your total cost is $${Total}, which will be charged to the card ${cardNumber}.`
  }
  else
    return "Sorry, we don't have a credit card on file for you."
}
