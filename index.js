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
 var newPrice=Math.floor(Math.random()*100);
 var newItem={itemName:item, itemPrice:newPrice};
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var cartString="";
  if(cart.length>0){
    cartString="In your cart, you have ";
    for(let c=0;c<cart.length;c++){
      cartString=cartString+cart[c].itemName+" at $"+cart[c].itemPrice;
      
      //If it's the last item
      if(c==cart.length-1){
        cartString=cartString+".";
      } else if(cart.length>2 && c<cart.length-2){
        //if there's more than 2 items, put a comma
        cartString=cartString+", ";
      } 
      if(c===cart.length-2) {
        //if it's the second to last item, put an and
        cartString=cartString+" and ";
      }
      
    }
  } else {
    cartString="Your shopping cart is empty.";
  }
  return cartString;
}


function total() {
  // write your code here
  var total=0;
  for(let i=0;i<cart.length;i++){
    total+=cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i=0;i<cart.length;i++){
    if(cart[i].itemName===item){
      var removedItem=cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber==="" || isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var myTotal=total();
    cart=[];
    var resultString=`Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`;
    return resultString;
  }
}
