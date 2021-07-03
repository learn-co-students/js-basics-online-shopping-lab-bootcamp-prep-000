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
  var price = Math.random()*99+1

  var newCartItem = {
    itemName: `${item}`,
    itemPrice: price
  }

  cart.push(newCartItem)

  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var line = 'In your cart, you have '; 
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    line += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return line;
  } else {
  	for (let i = 0; i < cart.length - 1; i++) {
    line += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
  } 
  return line + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
}

function total() {
  // write your code here
  var totalPrice = 0
  for(let i = 0 ; i < cart.length ; i++){
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0 ; i < cart.length ; i++){
    if(cart[i].itemName === item){
      return cart.splice(i,i)
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
  return 'Sorry, we don\'t have a credit card on file for you.'
  else{
    var line = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for(let i = 0 ; i < cart.length ; i++){
      cart.shift()
    }
    return line
  }
}
