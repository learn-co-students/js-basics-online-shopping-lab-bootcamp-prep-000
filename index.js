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
  cart.push({itemName : item, itemPrice:Math.floor(Math.random()*100)});
 return item + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  let food = "";
  // write your code here
  for (let i = 0; i < cart.length-1; i++){
   food += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  
  
  if (cart.length == 1) {
  return "In your cart, you have " + food  + `${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`;
  }
  
  else{
    return "In your cart, you have " + food  + "and " + `${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`;
  }
}

function total() {
  // write your code here
  let t = 0;
  for (let i = 0; i < cart.length; i++){
   t += Number(`${cart[i]['itemPrice']}`)
  }
  return t;
  
}

function removeFromCart(item) {
  // write your code here
   for (let i = 0; i<cart.length; i++) {
       if (cart[i]['itemName'] === item) {
         let newCart = cart.splice(i,1);
         return newCart;
       }
     }
     {
     return "That item is not in your cart."
        
  }
}





function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you." 
  } else {
    let t = total();
    for (let i = 0; i < cart.length; i++) {
      cart.splice(i,1)
  }
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
}
    }
    
