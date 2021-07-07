var cart = [];
var newCart = {};
var totals = 0;


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random(1)*100+1 );
 newCart = {itemName:item, itemPrice:price};
 cart.push(newCart)
 return `${item} has been added to your cart.`;
 
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}



function viewCart(){
 var total = [];
 var ammount = cart.length;
 var checkCart = {};
  if (cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  else {
    for (var i = 0; i < ammount; i++){
    checkCart = cart[i];
    if(i < cart.length - 1){
    total.push(` ${checkCart.itemName} at $${checkCart.itemPrice}` );
    }
    else if(i===0){
      total.push(` ${checkCart.itemName} at $${checkCart.itemPrice}.` );

    }
    else{
    total.push(` and ${checkCart.itemName} at $${checkCart.itemPrice}.` );

    }
    }
  }
  return `In your cart, you have${total}`;
}

function total(){
  var ammount = cart.length;
  var checkCart= {}
  totals = 0 ;

      for (var i = 0; i < ammount; i++){
       checkCart = cart[i];
       totals += checkCart.itemPrice;
      }
      return totals;
}


function removeFromCart(item){
var ammount = cart.length;
var checkCart = {};
  for (var i=0; i < ammount; i++){
  checkCart = cart[i];
  if(item === checkCart.itemName){
    console.log(i)
    cart.splice(i,1);

    return cart;

  }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cc){
  if(cc === undefined){
   return "Sorry, we don't have a credit card on file for you." ;
  }
  else{
  cart =[]
  return `Your total cost is $${totals}, which will be charged to the card ${cc}.`;
  }
}




