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
 const randomNum = Math.floor(Math.random() * 100);
 
 cart.push(Object.assign({}, {itemName: item, itemPrice: randomNum}));

 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
 if (cart.length === 0) {
   return `Your shopping cart is empty.`;
 } else if (cart.length === 1) { 
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
 } else if (cart.length === 2) {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
 } else {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
  }
}

function total() {
 
  var priceArr = [];

  for (let p = 0; p < cart.length; p++) {
    priceArr.push(cart[p]["itemPrice"]);
    console.log(priceArr)
  };
  
  return priceArr.reduce((a, b) => a + b);

}



function removeFromCart(item) {

  //Run for loop to check each element
  for (let i = 0; i < cart.length; i++){
   
    //if element's itemName === item, remove that element only.
    if (cart[i]["itemName"] === item) {
      cart.splice(i, 1);
      
      //Return edited cart
      return cart;
    } 
  };
  
  return "That item is not in your cart."
   
}

function placeOrder(cardNumber) {
    
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  };

  var cartTotal = total();
  
  cart = [];
  
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;

}
