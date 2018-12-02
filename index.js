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
  const itemObject = { 
    itemName: item, 
    itemPrice: Math.floor(Math.random()*100)+1, 
  }; 
  
  cart.push(itemObject); 
   
  return `The product ${item} has been added to your cart.`; 
} 

console.log(addToCart("apple")); 
console.log(addToCart("kiwi")); 
console.log(addToCart("kale")); 

function viewCart() {
  // write your code here 
  var message;
  
  if (cart.length===0){
    message = "Your cart be empty."; 
  } else { 
    message = `In your cart, you have `; 
    message = `${message} ${cart.length} items:` ; 
    
    for (i=0; i< cart.length; i++){
      message = `${message} ${cart[i].itemName}`;

      if (i == cart.length-1){
        message = `${message}.`; 
      } else {
        message = `${message},`; 
      }
    } 
  }

  return  message;  
}

console.log(viewCart());  

function total() {
  var sum = 0
  for (i=0; i<cart.length; i++){
    sum = sum + cart[i].itemPrice; 
  }
  return `The total value of the items in your cart is $${sum}.`; 
}

console.log(total());  

function removeFromCart(item) {
  /* The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    + ***HINT***: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. */
  var numRemoved = 0; 
  for (i=cart.length-1; i>=0; i--){ 
    if (cart[i].itemName==item){
      cart.splice(i); 
      numRemoved++; 
    } 
  } 
  var message;
  
  if (numRemoved===0){ 
    message = `That item is not in your cart.`;
  } else{
    message = `You have removed ${numRemoved} item(s): ${item}.`; 
  } 
  return message; 
}
console.log(removeFromCart ("kale")) ; 
console.log(removeFromCart ("banana")) ; 

function placeOrder(cardNumber) {
  // `Your total cost is $71, which will be charged to the card 83296759.`
  if (cardNumber === null){
    return `Sorry, we don't have a credit card on file for you.`; 
  } else {
    for (i=cart.length-1; i>=0; i--){ 
      cart.pop(); 
    } 
    return `Your total cost is ${total()}, which will be charged to the card ${cardNumber}.` ; 
    return `Your cart current has 0 items in it.`; 
  }
} 
console.log(placeOrder (1234567)); 


