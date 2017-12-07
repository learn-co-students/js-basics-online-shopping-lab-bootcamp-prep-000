var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 101 );
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var itemsAndPrices = []
  
  
  for (var i=0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    var price = cart[i][key]
    itemsAndPrices.push(key+" at $"+price);
  }
  
  
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
    }
    
  else if (cart.length === 1){
      console.log("In your cart, you have "+itemsAndPrices+".");
      }
  
  else if (cart.length === 2){
        console.log("In your cart, you have "+itemsAndPrices[0]+" and "+itemsAndPrices[1]+".");
        }
  else{
          itemsAndPrices[itemsAndPrices.length-1] = "and "+itemsAndPrices[itemsAndPrices.length-1];
          console.log("In your cart, you have "+itemsAndPrices.join(", ")+".")
  }
          
}
     
     
function total() {
  
  var total = 0;
  
  for (var i=0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    total += parseInt(cart[i][key]);
  }
    return total;
}

function removeFromCart(item) {
  for ( var i=0 ; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    
    if (key === item){
      cart.splice(i,1);
   
      return cart
    } 
  }
  console.log("That item is not in your cart.");
}  

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
    
  }else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = []
  }
}



