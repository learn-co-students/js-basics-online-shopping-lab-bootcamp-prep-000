//anruiz23

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
 var price = Math.floor(Math.random() * 100)+1; 
 //returns a random integer from 0 to 9
 
 var itemObj = {itemName: `${item}`, itemPrice: price};
 cart.push(itemObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length>0){
    var desc = 'In your cart, you have '
    for(let i=0; i<cart.length;i++){
      if(i==cart.length-1 && i!=0){
        desc = desc+'and ';
      }
      var item = cart[i];
      desc = desc+`${item.itemName} at $${item.itemPrice}`;
      if(i!=cart.length-1){
        desc = desc+', ';
      }
    }
    desc = desc +'.';
  }else{
    desc = "Your shopping cart is empty."
  }
  return desc;
}

function total() {
  var total = 0;
  for(let i=0; i<cart.length;i++){
    total=total+cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var found = false;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName==item){
      found = true;
      cart.splice(i,1);
    }
  }
  if(!found){
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  var receipt;
  var ttotal = total()
  if(cardNumber==null){
    receipt = "Sorry, we don\'t have a credit card on file for you.";
  }else{
    receipt =`Your total cost is $${ttotal}, which will be charged to the card ${cardNumber}.`;
    cart = [];
  }
  return receipt;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
