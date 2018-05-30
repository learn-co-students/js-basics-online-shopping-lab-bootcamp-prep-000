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
 var price=Math.floor((Math.random() * 100) + 1);
 var obj={itemName:item,itemPrice:price};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length==0)
  return "Your shopping cart is empty.";
  var str="In your cart, you have ";
  var i=0;
  for( i=0;i<cart.length;i++){
    var obj=cart[i];
    if(cart.length==1){
    str=str+`${obj.itemName} at $${obj.itemPrice},`;
    }
    else if(cart.length==2){
      if(i<cart.length-1)
      str=str+`${obj.itemName} at $${obj.itemPrice},`;
      else
      str=str+` and ${obj.itemName} at $${obj.itemPrice},`;
    }
    else if(cart.length>=3){
      if(i<cart.length-1)
      str=str+`${obj.itemName} at $${obj.itemPrice}, `;
      else
      str=str+`and ${obj.itemName} at $${obj.itemPrice},`;
    }
  }
  
  str=str.substr(0,str.length-1);
  return str+".";
}

function total() {
  // write your code here
  var total=0;
  for(let i=0;i<cart.length;i++){
    var obj=cart[i];
    total=total+obj.itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  console.log(cart);
  var index=-1;
  for(let i=0;i<cart.length;i++){
    var obj=cart[i];
    if(obj.itemName==item)
    {
      index=i;
      break;
    }
  }
  console.log(index);
  if(index>-1){
 return cart.splice(index,1);
 
  }
  else
  {
    return "That item is not in your cart.";
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber==null){
    //console.log("Sorry, we don't have a credit card on file for you.");
    return `Sorry, we don't have a credit card on file for you.`
  }
  var tot=total();
  cart.length=0;
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
}
