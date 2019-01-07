var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj={};
  itemObj[item]=Math.floor(Math.random()*100)+1;
  getCart().push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  var str = "Your shopping cart is empty.";

  var cart = getCart();
  if(cart.length>0){
    var itemName, itemCost, stringArr=[];
    str="In your cart, you have ";
    for(var ind in cart){
      itemName=Object.keys(cart[ind])[0];
      itemCost=cart[ind][itemName];
      stringArr.push(`${itemName} at $${itemCost}`)
    }
    //Case of 1 item: add to result and add a period.
    if(stringArr.length===1){
      console.log(str+stringArr[0]+'.');
      return;
    }
    //Case of 2 items: add an 'and', and a period.
    if(stringArr.length===2){
      console.log(str+stringArr.join(' and ')+'.');
      return;
    }
    //Case of more than 2 items: add on and, and commas
    stringArr[stringArr.length-1]='and '+stringArr[stringArr.length-1];
    console.log(str+stringArr.join(', ')+'.');
    return;
  }

  console.log(str);
}

function total() {
  var itemName, result=0;
  for(var ind in cart){
    itemName=Object.keys(cart[ind])[0];
    result+=cart[ind][itemName];
  }
  return result
}

function removeFromCart(item) {
  for(var ind in cart){
    if(cart[ind].hasOwnProperty(item)){
      cart.splice(ind,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
  else{console.log("Sorry, we don't have a credit card on file for you.")}
}
