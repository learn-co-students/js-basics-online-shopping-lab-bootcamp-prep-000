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
 var price = Math.floor(Math.random()*100);
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewaCart() {
  // write your code here
  var string="";
  if(cart.length===0){
    string+="Your shopping cart is empty.";
  }else{
    string+="In your cart, you have ";
    var keys = Object.keys(cart);
    for(var i=0;i<cart.length;i++){
      var key = keys[i];
      if(cart.hasOwnProperty(key)){
        if(i==0 && cart.length==1){
          string+=`${key} at $${cart[key]}.`;
        }else if(i!=0 && i==cart.length-1){
          string+=`, and ${key}  at $${cart[key]}.`;
        }else if(i==0 && cart.length!=1){
          string+=`${key} at $${cart[key]}`;
        }else{
          string+=`, ${key} at $${cart[key]}`;
        }
      }
    }
  }
  console.log(string);
}

function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var items = [];
     var string ="In your cart, you have ";
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         if(i==0 && cart.length==1){
           string+=`${item} at $${cart[i][item]}.`;
         }else if(i!=0 && i==cart.length-1 && cart.length!=2){
           string+=`, and ${item} at $${cart[i][item]}.`;
         }else if(i==0 && cart.length!=1){
           string+=`${item} at $${cart[i][item]}`;
         }else if(i!=0 && i==cart.length-1 && cart.length==2){
           string+=` and ${item} at $${cart[i][item]}.`;
         }
         else{
           string+=`, ${item} at $${cart[i][item]}`;
         }
       }
     }
     console.log(string);
   }
 }

function total() {
  // write your code here
  var total=0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]){
      total+=cart[i][item];
    }
  }return total;
}

function removeFromCart(item) {
  // write your code here

  var itemInCart = false
   for(var i = 0; i < cart.length; i++){
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true;
       cart.splice(i, 1);
     }
   }
   if (!itemInCart) {
     console.log("That item is not in your cart.");
   }
   return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
     console.log("Sorry, we don't have a credit card on file for you.");
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
     cart = [];
   }
 }
