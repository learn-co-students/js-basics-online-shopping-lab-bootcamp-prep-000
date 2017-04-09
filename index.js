var cart=[];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart=newCart;
}

function addToCart(item) {
  var price=Math.floor(Math.random() *100) +1;
  var item_object = {};
  item_object[item] = price;
  cart.push(item_object);
  console.log(item + " has been added to your cart.");
  return cart
 }

function viewCart() {
  if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var items = [];
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         items.push(item + " at $" + cart[i][item])
       }
     }
     console.log("In your cart, you have " + items.join(", ") + ".");
   }
 }

function removeFromCart(noItem) {
  var itemInCart=false
  for(var i = 0; i < cart.length; i++){
     if (cart[i].hasOwnProperty(noItem)) {
       itemInCart = true;
       cart.splice(i, 1);
     }
   }
   if (!itemInCart) {
     console.log("That item is not in your cart.");
   }
   return cart
 }

function total(){
  var total=0;
  for(let i=0; i<cart.length; i++){
     var itemsObj = Object.keys(cart[i]);
     total = total + cart[i][itemsObj[0]];
   }
   return total;
    // write your code here		    // write your code here
  		  
}


function placeOrder(ccNumber) {
  if(!ccNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + ccNumber + ".");
    cart=[];
  }
}
