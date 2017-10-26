var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {};
 obj[item] = Math.floor(Math.random()*100);
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
      return cart;
}

function viewCart() {
  var sentence_starter = "In your cart, you have";
  var cart_list = [];

 cart.forEach(function(item) {
    for(var key in item){
        cart_list.push(`${key} at $${item[key]}`)
    }
 });
       if(cart_list.length == 0){
         console.log("Your shopping cart is empty.");
       }
       else if(cart_list.length == 1){
      console.log(`${sentence_starter} ${cart_list}.`);
       }
       else if(cart_list.length ==2){
         console.log(`${sentence_starter} ${cart_list[0]} and ${cart_list[1]}.`);
       }
       else if(cart_list.length>=3){
         cart_list[cart_list.length-1]= "and "+cart_list[cart_list.length-1];
         console.log(`${sentence_starter} ${cart_list.join(", ")}.`);
       }
}

function total() {
    var total=0;
    cart.forEach(function(item){
      for(var key in item){
        total+=item[key];
      }
    });
    return total;
}

function removeFromCart(item) {
  var foodChecker=false;
 for(var i = 0;i<cart.length;i++){
   if(cart[i].hasOwnProperty(item)){
       foodChecker =true;
       cart.splice(i,1);


   }

 }
 if(!foodChecker){
   console.log("That item is not in your cart.");
 }
 return cart;
}

function placeOrder(cardNumber) {
  if(arguments.length ===0){
   console.log("Sorry, we don't have a credit card on file for you.");
 }
 else if(arguments.length ===1){
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
   cart = [];
 }
}
