var item = [{itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }];
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
let newObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
cart.push(newObj);
return `${newObj.itemName} has been added to your cart.`;
}
function viewCart() {
  // write your code here
var itemsInCart = `In your cart, you have`;
  if(cart.length<1){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1){
    itemsInCart = itemsInCart + " " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
    return itemsInCart;
  }
  for(var i=0;i<cart.length; i++){
    if((i+1) === cart.length){
      itemsInCart = itemsInCart + " and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
    }
    else{
    
    itemsInCart = itemsInCart + " " + cart[i].itemName + " at $" + cart[i].itemPrice + ",";
    }
  }
  return itemsInCart;
}
    
function total() {
  // write your code here
let totalValue = 0;
for (let item in cart) {
  totalValue = totalValue + cart[item].itemPrice;

}
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
 for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
if(cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  let message = 'Your total cost is $'+ total() +', which will be charged to the card '+ cardNumber +'.';
  cart.length = 0;
  return message;
  
}
