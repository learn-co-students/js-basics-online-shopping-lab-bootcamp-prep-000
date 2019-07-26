
var cart = [];
"use strict";
function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {itemName: item};
  item_object['itemPrice'] = price;
  cart.push(item_object);
  return (item_object.itemName + " has been added to your cart.");
}


addToCart("banana");
addToCart("apple");
console.log(cart);



function viewCart() {
  const l = cart.length;
  var items = [];
  var prices=[];

  if (!l) {
    return ("Your shopping cart is empty.");
  }
      else if (l===1){
      
           for (var i=0; i < l ; ++i)
               {items.push(cart[i]['itemName']);
                prices.push(cart[i]['itemPrice']);
               }
           var string = "In your cart, you have ";
               string+= items + " at $" + prices+".";
               return string;
      }
      else if (l===2){

           for (i = 0; i < l ; ++i)
               {items.push(cart[i]['itemName']);
                prices.push(cart[i]['itemPrice']);
               }
               string = "In your cart, you have "
               string+= items[0] + " at $" + prices[0]+", and "+items[1] + " at $" + prices[1]+"."
               return string
      }
            else if (l===3){

           for (i=0; i < l ; ++i)
               {items.push(cart[i]['itemName']);
                prices.push(cart[i]['itemPrice']);
               }
               string = "In your cart, you have "
               string+= items[0] + " at $" + prices[0]+", "+items[1] + " at $" + prices[1]+", and "+items[2] + " at $" + prices[2]+"."
               return string;
      }
  }

  
  
  
  

function removeFromCart(item) {
  // write your code here
  console.log(item);
for (var i=0;i<cart.length;i++){
    if(item===cart[i]['itemName']) {
      cart.splice(i, 1);
      var temp = cart;
    }}
       
      {temp ='That item is not in your cart.';}
  return temp;
}






function placeOrder(cardNumber) {
  if (!cardNumber) {
    var temp="Sorry, we don't have a credit card on file for you.";
  }
else{
   temp=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;

  cart = [];}
  
  
  
  return temp
  
}

function total() {
  let t = 0;

  for (var i = 0; i < cart.length; i++) {
      t += cart[i]['itemPrice'];
    
  }

  return t;
}
