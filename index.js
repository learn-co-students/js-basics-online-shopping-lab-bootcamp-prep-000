var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemName=String(item);
var itemPrice=Math.floor((Math.random()*101)+1);
item=Object.assign({itemName: itemName, itemPrice: itemPrice});
cart.push(item);
return `${itemName} has been added to your cart.`;
}
 

function viewCart() {
    if (cart.length===0){
      return "Your shopping cart is empty.";
    }
  var contents=[];
  for (var i=0; i<cart.length; i++){
    contents.push(`${getCart()[i].itemName}` + " at $" + `${getCart()[i].itemPrice}` );
    }
     var cartFilledWith="In your cart, you have "
  if (contents.length===1){
    cartFilledWith=cartFilledWith+ contents+".";
  }
  else if (contents.length===2){
    cartFilledWith=cartFilledWith+ contents[0]+", and "+contents[1]+".";
  }
  else if (contents.length>2){
    var lastItem = contents.pop();
    var otherItem= contents.join(", ");
    cartFilledWith=cartFilledWith+otherItem+", and "+ lastItem+".";
  }
    return cartFilledWith;
}  

function total() {
  var totalCost = 0;
    for (var i=0; i<cart.length; i++){
      totalCost += cart[i].itemPrice;
    }
    return totalCost;
}

function removeFromCart(item) {
  var result;
  var test;
  for (var i=0; i<cart.length; i++){
    if (cart[i].itemName===item){
      cart.splice(i,1);
      result=cart[i];
      test=true;
    }
  }
  if (test !== true){
    return "That item is not in your cart.";
  }
    return result;
}

function placeOrder(cardNumber) {
  if (cardNumber){
  var message= `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart=[];
  }else{
    return"Sorry, we don't have a credit card on file for you.";
  }
  return message;
}