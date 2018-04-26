var cart = [];

function getCart() {
 return cart;
}
function setCart(c) {
  cart = c;
  return cart;
}




function addToCart(item) {
  var items = {};
  items.itemName = item;
  items.itemPrice = Math.floor((Math.random() * 100) +1);
  cart.push(items)
  return `${items.itemName} has been added to your cart.`;
}




function viewCart() {
  let temp = [];
  let sentence = `In your cart, you have `;
  for(var i = 0; i < cart.length; i++ ){
      temp.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  
  for(var j = 0; j < temp.length; j++){
    if(j === temp.length-2 && temp.length > 1){
      temp[j]+= `, and `//in the 2nd to last index, make sure our grammar is correct
    }
    else if(j !== temp.length -1){ //in all cases except for our final item, precede with a comma.
      temp[j] += `, `; //
    }
  }
  if(cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  else{
    return sentence += `${temp.join('')}.`; //join our original sentence to our items.
  }
}







function total() {
  let holder = [];
  for(var i = 0; i < cart.length; i++){ //for every item in our cart
    holder.push(cart[i].itemPrice); //push the price to an array
  }
  let total = holder.reduce(function(a,b){ //create a variable called total and store the sum
    return a+b;
  });
  return total;
}

function removeFromCart(item) {
  let holder = [];
  for(var i = 0; i < cart.length; i++){
    holder.push(cart[i].itemName); //push all itemnames to the holder
  }
  if(holder.indexOf(item) > -1){ //if > -1, that means it exists.
    // take that index and delete from it in the cart since 1:1 push above.
    cart.splice((holder.indexOf(item)), 1);
    return cart;
  }
  else{ //otherwise that means the index returned <= -1, which means it doesn't exist.
    return `That item is not in your cart.`;
  }

}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else{
    let store = total(); //run our total before clearing the cart
    cart.length = 0; //clear the cart by setting its length to 0.
    return `Your total cost is $${store}, which will be charged to the card ${cardNumber}.`;
    
  }
}
