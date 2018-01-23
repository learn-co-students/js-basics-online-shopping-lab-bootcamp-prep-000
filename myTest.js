cart = [{'orange': 1}, {'lemons': 5}, {'apples': 10}];

function placeOrder(cardNumber) {
  // write your code here
  var total = 100;
  if(cardNumber !== undefined){
    console.log(`Your total cost is ${total}, which will be charged to the cart ${cardNumber}.`);
    cart = cart.slice(cart.length);
    console.log(cart);
  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}

placeOrder(3455667);


/*
function removeFromCart(item){
  for(var x = 0; x < cart.length; x++){
    if(cart[x].hasOwnProperty(item)){
       cart = [...cart.slice(0, x), ...cart.slice(x + 1)];
      
       return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
  
}
//var lemons = 'lemons';
//console.log(cart[1].hasOwnProperty('lemons'));
var something;
console.log(something);
removeFromCart();

8/
/*
//cart = [{'orange': 1}, {'lemons': 5}];
cart = [{'orange': 1}, {'lemons': 5}, {'apples': 10}];
//cart = [{'orange': 1}];
console.log("Starting...");


function viewCart() {
  // write your code here
  var itemsInCart = 'In your cart, you have';
  var obj;
  
  if(cart.length !== 0){
    
    for(var x = 0; x < cart.length; x++){
      obj = cart[x];
    
      if(cart.length > 1 && x === cart.length - 1){
        itemsInCart += ' and';
      }
      
      itemsInCart += ` ${Object.keys(obj)} at $${obj[Object.keys(obj)]}`;
      
      if(cart.length > 2 && x !== cart.length - 1){
        itemsInCart += ',';
      }
      
    }
    console.log(`${itemsInCart}.`);
  }
  else{
    console.log('Your shopping cart is empty.');
  }
}


viewCart();
*/


/*
 if(cart.length !== 0){
    
    for(var x = 0; x < cart.length; x++){
      obj = cart[x];
    
      if(cart.length > 1 && x === cart.length - 1){
        itemsInCart += ' and';
      }
      
      itemsInCart += ` ${Object.keys(obj)} at $${obj[Object.keys(obj)]}`;
      
      if(cart.length > 2 && x !== cart.length - 1){
        itemsInCart += ',';
      }
      
    }
    console.log(`${itemsInCart}.`);
*/