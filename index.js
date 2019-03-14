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
 let itemObject = new Object({itemName: item, itemPrice:( Math.floor(Math.random() * 100 + 1))});
 cart.push(itemObject);
 return `${itemObject.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  let string = "In your cart, you have ";
  let currentCart = getCart();
  for(let i = 0; i < currentCart.length; i++){
    if((i+1) === currentCart.length){
      string += `and ${currentCart[i].itemName} at $${currentCart[i].itemPrice}.`;
    }else{
      string += `${currentCart[i].itemName} at $${currentCart[i].itemPrice}, `;
    }
  }
  return string;
}

function total() {
  // write your code here
  let total = 0;
  for(let i = 0; i < getCart().length; i++){
    total += getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    let t = total();
    cart = [];
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
  }else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
