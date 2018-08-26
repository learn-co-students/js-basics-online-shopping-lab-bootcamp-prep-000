var cart = [];

function addToCart(item) {
  let obj={
    itemName: item, 
    itemPrice:Math.floor(Math.random()* 100)
  };
  cart.push(obj);
  return (`${obj.itemName} has been added to your cart.`);
}

function setCart(c) {
  cart = c;
}

function getCart() {
 // write your code here
 return cart;
}

function viewCart(){

  if (getCart().length ===0) {
    return ('Your shopping cart is empty.');
    } for (let i=0; i<getCart().length; i++){
         } 
    if (getCart().length ===1) {
       return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
      } else if (getCart().length ===2){
         return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`);
      } else {
        return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`);
      }
  
    }

function total() {
  var sum = 0;
  for (var i= 0; i<getCart().length; i++){
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(name) {
  // write your code here
  for(let i=0; i<getCart().length; i++){
        if(cart[i].itemName===name){
          cart.splice(i, 1);
          return cart;
        } 
  }
return ('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return ('Sorry, we don\'t have a credit card on file for you.');
  } else {
    var sumToCharge = total();
    setCart([]);
   return (`Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`);
  }
}
