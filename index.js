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
 var obj = new Object();
 obj.itemName = item;
 obj.itemPrice = Math.random() * 100;
 cart.push (obj);
 return obj.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  var cartList="In your cart, you have ";
  var i=0;
  var j=0;
  if ( cart.length == 0)
  {
     return "Your shopping cart is empty."
  }else{
     do{
       cartList = cartList + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
       i++;
       if(i==cart.length)
       {
         cartList = cartList + ".";
       }else{
         if(i==(cart.length-1)){
           cartList = cartList + ", and ";
         }else{
           cartList = cartList + ", ";
         }
       }
     }while(i<cart.length);
  }
  return cartList;
}


function total() {
  // write your code here
  var i=0;
  var totalCost = 0;
  var cartLength = cart.length;
  for(i=0;i<cartLength;i++){
    totalCost += getCart()[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(itemName) {
  // write your code here
  var i=0;
  var itemExist=false;
  var cartLength = cart.length;
  var name="";


  for(i=0; i<cartLength;i++){
    var item = cart[i];

    if(item && item.hasOwnProperty('itemName') && item.itemName === itemName){
      cart.splice(i,1);
      itemExist=true;
      break;
    }

  }

  if(itemExist==false)
  {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var message="";
  if(cardNumber != null){
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return message;
  }else{
    cart=[];
    message = "Sorry, we don't have a credit card on file for you.";
    return message;
  }

}
