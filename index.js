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
 function randomPrice () {
   return Math.floor(Math.random() * Math.floor(100));
 }
 
 let object = {itemName : item, itemPrice : randomPrice()};
 cart.push(object)
 let str = `${item} has been added to your cart.`
 return str
}

function viewCart() {
  let cartReport = "In your cart, you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for(let i = 0; i < cart.length; i++){
    if (i === 0) {
      cartReport = `${cartReport}${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
    }
    else if(i === cart.length - 1){
      cartReport = `${cartReport}, and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
    }
    else {
      cartReport = `${cartReport}, ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
    }
  }
  return  `${cartReport}.`
}

function total() {
  let sum = 0
  for(let i = 0; i < cart.length; i++){
    sum = sum + cart[i]['itemPrice']
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  let sum = total();
  cart.length = 0
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
