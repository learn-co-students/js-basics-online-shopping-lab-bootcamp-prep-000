var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  let newItem = {itemName: item, itemPrice: price}
  cart.push(newItem);
  return`${item} has been added to your cart.`
  
}
  
function viewCart() {
  // write your code here
  let newArray = [];
  if(cart.length === 0) return "Your shopping cart is empty.";
  else{
    for(let i = 0; i < cart.length; i++){
      let key = cart[i];
      newArray.push(`${key.itemName} at $${key.itemPrice}`)
      }
  } if(cart.length === 1) return `In your cart, you have ${newArray[0]}.`
    if(cart.length ===2) return `In your cart, you have ${newArray[0]}, and ${newArray[1]}.`
    if(cart.length >= 3){
      return `In your cart, you have ${newArray.slice(0, -1).join(", ")}, and ${newArray[newArray.length -1]}.`
    }
}

function total() {
  // write your code here
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    let key = cart[i];
  sum += parseInt(key.itemPrice);
    
  } return sum
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    let key = cart[i];
    if(key.itemName == item){
    cart.splice(i, 1);
    return cart
    }
  }return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){ return "Sorry, we don't have a credit card on file for you.";
  }else{
    let newSum = total();
     cart.length = 0;
   return `Your total cost is $${newSum}, which will be charged to the card ${cardNumber}.`
   
  }
}

