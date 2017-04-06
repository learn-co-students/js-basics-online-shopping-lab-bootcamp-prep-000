var cart = {};

function getCart(){
  return cart;
}

function addToCart(item){
 var price = (Math.floor(Math.random()*99)) + 1;
 var addThis = {[item]: price};
 cart.push(addThis);
 console.log(`${item} has been added to your cart.`)
 return cart

 }


 function viewCart(){

   if(cart.length === 0){
   console.log("Your shopping cart is empty.");
 } else{
     var firstWord = "In your cart, you have ";
   for(var i = 0; i < cart.length; i++){
     for(var items in cart[i]){

    if(i == cart.length - 1){
      firstWord+= (items + " at "+"$"+cart[i][items]+".");
    }else{
      firstWord+= (items + " at "+ "$"+cart[i][items]+", ");
    }

   }
 }
 console.log(firstWord);
 }
 }

 function removeFromCart(item){
   for(var j = 0; j< cart.length; j++){
   for(var items in cart[j]){

   if(items == item){
     cart.splice(j,1);
     return (cart);
   }

 }

 }
 console.log("That item is not in your cart.");
 }


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(creditCard){
  if(creditCard == null){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is " + "$"+total() + ", which will be charged to the card "+ creditCard+".");
  }
  cart = [];
}

function setCart(newCart) {
  cart = newCart;
}
