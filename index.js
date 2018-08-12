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
 let price = Math.floor(100*Math.random())
 let newItem = { itemName: item, itemPrice: price }
 cart.push(newItem);
 return (`${newItem.itemName} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  let length = cart.length;
  if (length > 0) {
    let message = "In your cart, you have";
    for (let i = 0 ; i < length; i++){
      message = message.concat(`${i === length-1 && i !==0?" and ":" "}${cart[i].itemName} at $${cart[i].itemPrice}${i === length-1 ?"." :  ","}` );
    }
    return message;
    
  } else
  return ("Your shopping cart is empty.");
  
}

function total() {
  // write your code here
  let total= 0;
  for ( let i=0; i<cart.length; i++)
    total = total + cart[i].itemPrice;
  return total;
}

function removeFromCart(item) {
  // write your code here
  let itemFound= false;
  if (cart.length > 0) {
  for ( let i=0; i < cart.length; i++){
    if (cart[i].itemName === item) {
      console.log(cart[i]);
      itemFound= true;
      cart.splice(i,1);
      return cart;
    } 
  }
  if(itemFound === false)
   return("That item is not in your cart")
  } else {
    return("That item is not in your cart.")
  }
  
  
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    let value = total();
    cart = [];
    return (`Your total cost is $${value}, which will be charged to the card ${cardNumber}.`);
    
  } else {
    return ("Sorry, we don't have a credit card on file for you.")
  }
}
