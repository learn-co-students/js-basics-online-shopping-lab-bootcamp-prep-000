var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {itemName: item, itemPrice: Math.floor(Math.random()*100)};
 cart.push(object);
 return item + " has been added to your cart.";
}

function viewCart() {

  var array =["In your cart, you have "];
  
  if (cart.length < 1){
    return "Your shopping cart is empty.";
  } else if( cart.length == 1 ){
      return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  } else if( cart.length == 2){
      return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
  } else{
    for( let i = 0; i< cart.length; i++){
      if (i !== cart.length-1) {
        array.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
      } else {
        array.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      }
    }
    return array.join("");
  }
 }

function total() {
  // write your code here
  var sum = 0;
  for(let i = 0; i< cart.length; i++){
    sum = sum + cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  let i = 0;
  for(i = 0 ; i < cart.length; i++ ){
    if( item == cart[i].itemName){
      cart.splice(i,1);
      return cart;
    }
  }
    return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
  var totalCost = total();
  if (cardNumber == null){
    return "Sorry, we don't have a credit card on file for you.";
  }else{
    cart.splice(0,cart.length);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
